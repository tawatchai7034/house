import { HotelDataModel } from '../../features/store/hotel.model'

export interface HotelsStateInterface {
  hotels: HotelDataModel[];
  isLoading: boolean;
  error: string | null;

}
