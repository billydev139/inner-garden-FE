import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

interface GetRecipesByCategoriesResponse {
  data: any; // Will Adjust this type according to API response data structure
}

interface GetRecipesByCategoriesError {
  message: string;
}

export const getRecipesByCategories = createAsyncThunk<
  GetRecipesByCategoriesResponse,
  void,
  {
    rejectValue: GetRecipesByCategoriesError;
  }
>(
  "getRecipesByCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<GetRecipesByCategoriesResponse> = await axios.get(
        "api-url"
      );

      return response.data;
    } catch (error:any) {
      return rejectWithValue({ message: error.message });
    }
  }
);
