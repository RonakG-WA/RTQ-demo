import axios from "axios";

export const axiosBaseQuery = ({ baseUrl }: { baseUrl: string }) => async ({ url, method, data }: { url: string; method: string; data?: any }) => {
    try {
        const result = await axios({ url: baseUrl + url, method, data });
        return { data: result.data };
    } catch (axiosError) {
        let err = axiosError as any;
        return {
            status: err.response?.status,
            error: {
                data: err.response?.data || err.message,
            },
        };
    }
};