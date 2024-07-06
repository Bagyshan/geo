import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const instance = axios.create({
    baseURL: 'http://34.71.94.143/',
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
            const response = await instance.get(`/maps/maps`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getNewMaps = createAsyncThunk(
    "api/getNewMaps",
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const response = await instance.get(`/maps/newmaps/`);
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
            const response = await instance.get(`/maps/maps/${id}/`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getNewMap = createAsyncThunk(
    "api/getNewMap",
    async (id , { rejectWithValue, dispatch }) => {
        try {
            const response = await instance.get(`/maps/newmaps/${id}/`);
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
export const getDiagramInvestor = createAsyncThunk(
    "api/getDiagramInvestor",
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const response = await instance.get(`/charts/category-chart/allocation/`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getLineChartInvestor = createAsyncThunk(
    "api/getLineChartInvestor",
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const response = await instance.get(`/charts/category-chart/monthlyincome/`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
export const getInvestorsInfo = createAsyncThunk(
    "api/getInvestorsInfo",
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const response = await instance.get(`/investors/`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getInvestorItem = createAsyncThunk(
    "api/getInvestorItem",
    async (id, { rejectWithValue, dispatch }) => {
        try {
            const response = await instance.get(`/investors/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getGP = createAsyncThunk(
    "api/getGP",
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const response = await instance.get(`/gp/`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getAboutCompany = createAsyncThunk(
    "api/getAboutCompany",
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const response = await instance.get(`/aboutcompany/1/`);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);
export const getAchievements = createAsyncThunk(
    "api/getAchievements",
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const response = await instance.get(`/achievements/`);
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
        homes: [],
        loading: false,
        error: null,
        map: [],
        newMap:[],
        maps: [],
        newMaps:[],
        news:[],
        newsPost:[],
        services:[],
        diagramInvestor:[],
        lineChartInvestor:[],
        investorsInfo:[],
        investorItem:[],
        gp:[],
        aboutCompany:[],
        achievements:[],

    },
    reducers: {
        clearMap: (state) => {
            state.map = [];
        },
        clearNewMap: (state) =>{
            state.newMap = [];
        },
        clearInvestorItem:  (state) =>{
            state.investorItem = []
        },
        clearNewsPost:  (state) =>{
            state.newsPost = []
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(getHome.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getHome.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.homes = payload;
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
            .addCase(getNewMaps.pending, (state) => {
                state.loading = true;
            })
            .addCase(getNewMaps.fulfilled, (state,{payload}) => {
                state.loading = false;
                state.newMaps = payload;
            })
            .addCase(getNewMaps.rejected, (state) => {
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
            .addCase(getNewMap.pending, (state) => {
                state.loading = true;
            })
            .addCase(getNewMap.fulfilled, (state,{payload}) => {
                state.loading = false;
                state.newMap = payload;
            })
            .addCase(getNewMap.rejected, (state) => {
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
            })
            .addCase(getDiagramInvestor.pending, (state) => {
                state.loading = true;
            })
            .addCase(getDiagramInvestor.fulfilled, (state,{payload}) => {
                state.loading = false;
                state.diagramInvestor = payload;
            })
            .addCase(getDiagramInvestor.rejected, (state) => {
                state.loading = false;
            })
            .addCase(getLineChartInvestor.pending, (state) => {
                state.loading = true;
            })
            .addCase(getLineChartInvestor.fulfilled, (state,{payload}) => {
                state.loading = false;
                state.lineChartInvestor = payload;
            })
            .addCase(getLineChartInvestor.rejected, (state) => {
                state.loading = false;
            })
            .addCase(getInvestorsInfo.pending, (state) => {
                state.loading = true;
            })
            .addCase(getInvestorsInfo.fulfilled, (state,{payload}) => {
                state.loading = false;
                state.investorsInfo = payload;
            })
            .addCase(getInvestorsInfo.rejected, (state) => {
                state.loading = false;
            })
            .addCase(getInvestorItem.pending, (state) => {
                state.loading = true;
            })
            .addCase(getInvestorItem.fulfilled, (state,{payload}) => {
                state.loading = false;
                state.investorItem = payload;
            })
            .addCase(getInvestorItem.rejected, (state) => {
                state.loading = false;
            })
            .addCase(getGP.pending, (state) => {
                state.loading = true;
            })
            .addCase(getGP.fulfilled, (state,{payload}) => {
                state.loading = false;
                state.gp = payload;
            })
            .addCase(getGP.rejected, (state) => {
                state.loading = false;
            })
            .addCase(getAboutCompany.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAboutCompany.fulfilled, (state,{payload}) => {
                state.loading = false;
                state.aboutCompany = payload;
            })
            .addCase(getAboutCompany.rejected, (state) => {
                state.loading = false;
            })
            .addCase(getAchievements.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAchievements.fulfilled, (state,{payload}) => {
                state.loading = false;
                state.achievements = payload;
            })
            .addCase(getAchievements.rejected, (state) => {
                state.loading = false;
            });


    },
});

export default apiSlice.reducer;
export const { clearMap, clearNewMap ,clearInvestorItem,clearNewsPost} = apiSlice.actions;