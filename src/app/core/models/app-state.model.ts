import { HotelsStateInterface } from './hotels-state.model';
import { AuthStateInterface } from './auth-state.model';

export interface AppStateInterface {
  hotels: HotelsStateInterface;
  auth: AuthStateInterface;
}
