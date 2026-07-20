export interface ForecastItem {
  type: "Sunrise" | "Sunset";
  model_data: boolean;
  quality: number;
  cloud_cover: number;
  quality_text: "Poor" | "Fair" | "Good" | "Excellent";
  time: string;
  direction: number;
  magics: {
    blue_hour: string[];
    golden_hour: string[];
  };
}

export interface ForecastResponse {
  time: string;
  location: {
    latitude: number;
    longitude: number;
  };
  grid_location: {
    latitude: number;
    longitude: number;
  };
  data: ForecastItem[];
}

export interface Coordinates {
  latitude: number | null;
  longitude: number | null;
}
