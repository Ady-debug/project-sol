export interface ForecastItem {
  type: string;
  model_data: boolean;
  quality: number;
  cloud_cover: number;
  quality_text: string;
  time: string;
  direction: number;
  magics: object;
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

export interface PositionResponse {
  coords: {
    latitude: number;
    longitude: number;
    altitude: number | null;
    altitudeAccuracy: number | null;
    speed: number | null;
    heading: number | null;
  };
  timestamp: number;
}

export interface Coordinates {
  latitude: number | null;
  longitude: number | null;
}
