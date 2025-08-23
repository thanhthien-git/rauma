interface ILogoLoaderProp {
  loading?: boolean;
  isFullScreen?: boolean;
}

export default function LogoLoader({
  loading = true,
  isFullScreen = false,
}: Readonly<ILogoLoaderProp>) {
  if (!loading) return null;

  return (
    <div
      className={`flex items-center justify-center ${
        isFullScreen ? "fixed inset-0 z-50 bg-white" : "absolute inset-0 p-6"
      }`}
    >
      <svg
        width="500"
        height="90"
        viewBox="0 0 131 24"
        className="w-[200px] h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#111">
              <animate
                attributeName="stop-color"
                values="#111;#555;#111"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#555">
              <animate
                attributeName="stop-color"
                values="#555;#111;#555"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>

        <path
          d="M24.2133 23H16.96L13.92 17.2133H8.32V23H0.933333V0.6H13.76C19.9733 0.6 23.4667 3.26667 23.4667 9.16C23.4667 12.1733 22.1067 14.3067 20.2133 15.64L24.2133 23ZM8.32 6.73333V11.6933H13.2533C15.12 11.6933 16.08 10.7867 16.08 9.21333C16.08 7.64 15.12 6.73333 13.2533 6.73333H8.32ZM43.6771 23L42.6904 20.04H33.0904L32.1038 23H24.4771L32.7171 0.6H43.0638L51.3038 23H43.6771ZM34.9038 14.5733H40.8771L38.5304 7.53333H37.2504L34.9038 14.5733ZM62.2521 23.7467C54.5454 23.7467 50.6521 20.4667 50.6521 13.24V0.6H58.0921V13.0533C58.0921 15.8267 59.3188 17.56 62.2521 17.56C65.1854 17.56 66.4654 15.8267 66.4654 13.0533V0.6H73.8521V13.1867C73.8521 20.4667 69.9587 23.7467 62.2521 23.7467ZM75.7146 23V0.6H85.0212L88.6746 13.3733H89.2079L92.8612 0.6H102.168V23H95.1279V13.08H94.5413L91.6879 23H86.1946L83.3413 13.08H82.7546V23H75.7146ZM122.427 23L121.44 20.04H111.84L110.854 23H103.227L111.467 0.6H121.814L130.054 23H122.427ZM113.654 14.5733H119.627L117.28 7.53333H116L113.654 14.5733Z"
          fill="url(#grad)"
        />
      </svg>
    </div>
  );
}
