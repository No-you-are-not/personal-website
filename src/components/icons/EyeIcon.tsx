import { SvgIconType } from './svg.interface';

const EyeIcon: SvgIconType = ({ width = 40, height = 40, className = '' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="20" cy="20" r="3" stroke="#545454" strokeWidth="2" />
    <path
      d="M28.188 18.9343C28.5762 19.4056 28.7703 19.6412 28.7703 20C28.7703 20.3588 28.5762 20.5944 28.188 21.0657C26.7679 22.7899 23.6357 26 20 26C16.3643 26 13.2321 22.7899 11.812 21.0657C11.4238 20.5944 11.2297 20.3588 11.2297 20C11.2297 19.6412 11.4238 19.4056 11.812 18.9343C13.2321 17.2101 16.3643 14 20 14C23.6357 14 26.7679 17.2101 28.188 18.9343Z"
      stroke="#545454"
      strokeWidth="2"
    />
  </svg>
);

export default EyeIcon;
