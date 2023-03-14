export interface HotelDataModel {
  address: string;
  cardBackground: string;
  amenities: string[];
  location: { lat: number; lng: number };
  name: string;
  nightlyPrice: number;
  overview: string;
  photos: string[];
  rooms: { name: string; description: string; price: number }[];
}
