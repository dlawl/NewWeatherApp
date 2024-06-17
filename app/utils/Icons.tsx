// app/utils/Icons.tsx
import {
  FaCloudSunRain,
  FaCloudShowersHeavy,
  FaSnowflake,
  FaSun,
  FaMapMarkerAlt,
  FaThermometerHalf,
  FaTint,
  FaTemperatureHigh,
  FaSearch,
} from 'react-icons/fa'
import { WiStrongWind, WiCloudy } from 'react-icons/wi'

export const searchIcon = <FaSearch size={14} />
export const drizzleIcon = <FaCloudSunRain size={40} />
export const rain = <FaCloudShowersHeavy size={40} />
export const snow = <FaSnowflake size={40} />
export const clearSky = <FaSun size={40} />
export const cloudy = <WiCloudy size={40} />
export const navigation = <FaMapMarkerAlt size={15} />
export const thermo = <FaThermometerHalf size={40} />
export const wind = <WiStrongWind size={40} />
export const droplets = <FaTint size={40} />
export const thermometer = <FaTemperatureHigh size={40} />
