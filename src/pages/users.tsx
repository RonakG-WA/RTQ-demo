import React, { useState } from 'react';
import { useGetUsersQuery, useAddUserMutation, useUpdateUserMutation, useDeleteUserMutation } from '../services/userApi';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Switch } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { User } from '../type/User';
import TextFieldComponent from '../components/TextField/TextFieldComponent';
import ButtonComponent from '../components/Button/ButtonComponent';
import CustomRadioGroup from '../components/RadioButton/RadioButtonComponent';

const TodoList: React.FC = () => {
  const { data: users, error, isLoading } = useGetUsersQuery();
  const [addUser] = useAddUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();
  const [newUser, setNewUser] = useState({ name: '', email: '', phone: '', gender: '' });
  const [editUser, setEditUser] = useState<User | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' }
  ];
  const handleAddUser = async () => {
    if (newUser.name && newUser.email && newUser.phone && newUser.gender) {
      await addUser({ ...newUser, active: true });
      resetForm();
      setIsAddDialogOpen(false); 
    }
  };

  const handleUpdateUserStatus = async (id: number, active: boolean) => {
    await updateUser({ id, active: !active });
  };

  const handleDeleteUser = async (id: number) => {
    await deleteUser(id);
  };

  const handleOpenEditDialog = (user: User) => {
    setEditUser(user);
  };

  const handleCloseEditDialog = () => {
    setEditUser(null);
  };

  const handleUpdateUser = async () => {
    if (editUser) {
      await updateUser(editUser);
      setEditUser(null);
    }
  };

  const resetForm = () => {
    setNewUser({ name: '', email: '', phone: '', gender: '' });
  };

  const handleAddDialogClose = () => {
    resetForm();
    setIsAddDialogOpen(false);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'name', headerName: 'Name', width: 300 },
    { field: 'email', headerName: 'Email', width: 300 },
    { field: 'phone', headerName: 'Phone', width: 300 },
    { field: 'gender', headerName: 'Gender', width: 300 },
    {
      field: 'active',
      headerName: 'Active',
      width: 200,
      renderCell: (params) => (
        <Switch
          checked={params.value}
          onChange={() => handleUpdateUserStatus(params.row.id, params.value)}
          color="primary"
        />
      )
    },
    {
      field: 'edit',
      headerName: 'Edit',
      width: 200,
      renderCell: (params) => (
        <Button onClick={() => handleOpenEditDialog(params.row)}>
          <EditIcon />
        </Button>
      )
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 200,
      renderCell: (params) => (
        <Button onClick={() => handleDeleteUser(params.row.id)}>
          <DeleteIcon />
        </Button>
      )
    }
  ];

  return (
    <div style={{ margin: '0px 50px' }}>
      <h1>User Management</h1>
      <ButtonComponent variant={"contained"} name={'Add User'} color={"primary"} onClick={() => setIsAddDialogOpen(true)}  />
      <div style={{ height: 400, width: '100%', marginTop: '20px' }}>
        <DataGrid rows={users || []} columns={columns} />
      </div>
      <Dialog open={isAddDialogOpen} onClose={handleAddDialogClose}>
        <DialogTitle>Add User</DialogTitle>
        <DialogContent>
          <TextFieldComponent label={"User Name"} margin={"normal"} value={newUser.name} variant={"outlined"} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
          <TextFieldComponent label={"User Email"} margin={"normal"} value={newUser.email} variant={"outlined"} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
          <TextFieldComponent label={"User Phone"} margin={"normal"} value={newUser.phone} variant={"outlined"} onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })} />
          <CustomRadioGroup value={newUser.gender} onChange={(e) => setNewUser({ ...newUser, gender: e.target.value })} options={genderOptions} />
        </DialogContent>
        <DialogActions>
          <ButtonComponent onClick={handleAddDialogClose} color={'error'} name={'Cancel'} />
          <ButtonComponent onClick={handleAddUser} color={'primary'} name={'Add'} />
        </DialogActions>
      </Dialog>
      <Dialog open={!!editUser} onClose={handleCloseEditDialog}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <TextFieldComponent label={"User Name"} margin={"normal"} value={editUser?.name || ''} variant={"outlined"} onChange={(e) => setEditUser({ ...editUser!, name: e.target.value })} />
          <TextFieldComponent label={"User Email"} margin={"normal"} value={editUser?.email || ''} variant={"outlined"} onChange={(e) => setEditUser({ ...editUser!, email: e.target.value })} />
          <TextFieldComponent label={"User Phone"} margin={"normal"} value={editUser?.phone || ''} variant={"outlined"} onChange={(e) => setEditUser({ ...editUser!, phone: e.target.value })} />
          <CustomRadioGroup value={editUser?.gender || ''} onChange={(e) => setEditUser({ ...editUser!, gender: e.target.value })} options={genderOptions} />
        </DialogContent>
        <DialogActions>
          <ButtonComponent onClick={handleCloseEditDialog} color={'error'} name={'Cancel'} />
          <ButtonComponent onClick={handleUpdateUser} color={'primary'} name={'Save'} />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TodoList;
