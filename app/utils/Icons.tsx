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
export const drizzleIcon = <FaCloudSunRain size={50} />
export const rain = <FaCloudShowersHeavy size={50} />
export const snow = <FaSnowflake size={50} />
export const clearSky = <FaSun size={50} />
export const cloudy = <WiCloudy size={50} />
export const navigation = <FaMapMarkerAlt size={15} />
export const thermo = <FaThermometerHalf size={50} />
export const wind = <WiStrongWind size={50} />
export const droplets = <FaTint size={50} />
export const thermometer = <FaTemperatureHigh size={50} />
