import { MOCK_PLACES } from "../constant";

export const getMockPlaceDetails = () => {
  return MOCK_PLACES[Math.floor(Math.random() * MOCK_PLACES.length)];
};
