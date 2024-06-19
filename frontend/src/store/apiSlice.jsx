import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const instance = axios.create({
    // baseURL: 'http://34.173.224.126/',
    baseURL: 'http://0.0.0.0:8000/',
})

export const getHome = createAsyncThunk(
    "api/getHome",
    async function (_, { rejectWithValue }) {
        try {
            const response = await instance.get(`/home/`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);

export const getMaps = createAsyncThunk(
    "api/getMaps",
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const response = await instance.get(`/maps/`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getNews = createAsyncThunk(
    "api/getNews",
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const response = await instance.get(`/news/`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getServices = createAsyncThunk(
    "api/getServices",
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const response = await instance.get(`/services/`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const postComment = createAsyncThunk(
    "api/postComment",
    async ({ id, comment }, { rejectWithValue }) => {
        try {
            const response = await instance.post(`/news/${id}/comment/`, comment);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getMap = createAsyncThunk(
    "api/getMap",
    async (id , { rejectWithValue, dispatch }) => {
        try {
            const response = await instance.get(`/maps/${id}/`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getNewsPost = createAsyncThunk(
    "api/getNewsPost",
    async (id, { rejectWithValue, dispatch }) => {
        try {
            const response = await instance.get(`/news/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);

const apiSlice = createSlice({
    name: "api",
    initialState: {
        home: [],
        loading: false,
        error: null,
        map: [],
        maps: [],
        news:[],
        newsPost:[],
        services:[],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getHome.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getHome.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.home = payload;
            })
            .addCase(getHome.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getMaps.pending, (state) => {
                state.loading = true;
            })
            .addCase(getMaps.fulfilled, (state,{payload}) => {
                state.loading = false;
                state.maps = payload;
            })
            .addCase(getMaps.rejected, (state) => {
                state.loading = false;
            })
            .addCase(getMap.pending, (state) => {
                state.loading = true;
            })
            .addCase(getMap.fulfilled, (state,{payload}) => {
                state.loading = false;
                state.map = payload;
            })
            .addCase(getMap.rejected, (state) => {
                state.loading = false;
            })
            .addCase(getNews.pending, (state) => {
                state.loading = true;
            })
            .addCase(getNews.fulfilled, (state,{payload}) => {
                state.loading = false;
                state.news = payload;
            })
            .addCase(getNews.rejected, (state) => {
                state.loading = false;
            })
            .addCase(getNewsPost.pending, (state) => {
                state.loading = true;
            })
            .addCase(getNewsPost.fulfilled, (state,{payload}) => {
                state.loading = false;
                state.newsPost = payload;
            })
            .addCase(getNewsPost.rejected, (state) => {
                state.loading = false;
            })
            .addCase(getServices.pending, (state) => {
                state.loading = true;
            })
            .addCase(getServices.fulfilled, (state,{payload}) => {
                state.loading = false;
                state.services = payload;
            })
            .addCase(getServices.rejected, (state) => {
                state.loading = false;
            });


    },
});

export default apiSlice.reducer;
export const employerActions = apiSlice.actions;