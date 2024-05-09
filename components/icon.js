import React from 'react'

const getIcon = (name, color) => {
  switch (name) {
    case 'Logo':
      return (
        <>
          <path
     d="m 1.7099,2.4582 c 1.8666,1.0637 3.1333,3.0571 3.1333,5.3436 0,2.2782 -1.2886,4.2972 -3.1333,5.3442 z M 0.22053,0.31405 v 0 V 15.257 C 0.75395,15.14 1.2429,14.989 1.7099,14.788 4.4434,13.615 6.3326,10.91 6.3326,7.7851 6.3326,4.6191 4.4215,1.9138 1.7099,0.75797 1.2429,0.58207 0.75395,0.43132 0.22053,0.2973 Z M 9.3911,15.181 V 0.39781 H 7.9019 V 15.181 Z M 12.648,7.8018 c 0.578,0.5528 1.556,1.3066 1.556,2.7732 0,1.767 -1.443,3.208 -3.244,3.208 v 1.491 c 2.623,0 4.734,-2.111 4.734,-4.699 0,-0.8049 -0.2,-1.5588 -0.423,-1.9523 -0.444,-0.8879 -0.978,-1.3988 -1.532,-1.8595 -0.957,-0.804 -1.29,-1.4405 -1.29,-2.2865 0,-1.4824 1.2,-2.6801 2.69,-2.6801 V 0.31405 c -2.311,0 -4.179,1.85935 -4.179,4.16265 0,1.0386 0.445,2.1274 1.688,3.3251 z M 22.708,1.8217 V 0.31405 C 22.174,0.44807 21.686,0.59883 21.241,0.77471 18.53,1.9305 16.596,4.6358 16.596,7.8018 c 0,3.1242 1.912,5.8302 4.645,7.0022 0.445,0.202 0.933,0.352 1.467,0.47 v -1.533 c -0.6,-0.176 -0.999,-0.402 -1.467,-0.595 -1.866,-1.047 -3.156,-3.066 -3.156,-5.3442 0,-2.2865 1.267,-4.2799 3.156,-5.3436 0.468,-0.2848 1,-0.4439 1.467,-0.6365 z m 7.171,-1.59977 c -4.202,0 -7.602,3.39217 -7.602,7.57987 0,4.1632 3.4,7.5552 7.602,7.5552 4.2,0 7.6,-3.392 7.6,-7.5552 0,-4.1877 -3.4,-7.57987 -7.6,-7.57987 z m 0,1.48257 c 3.377,0 6.111,2.7303 6.111,6.0973 0,3.3672 -2.734,6.0732 -6.111,6.0732 -3.379,0 -6.112,-2.706 -6.112,-6.0732 0,-3.367 2.733,-6.0973 6.112,-6.0973 z m 10.658,0.092 c 0.869,0 1.579,0.7119 1.579,1.5746 0,0.8626 -0.71,1.5494 -1.579,1.5494 z M 40.248,0.39781 H 39.049 V 15.274 c 0.489,0 0.978,-0.08 1.488,-0.201 2.601,-0.671 4.535,-3.058 4.535,-5.8976 0,-1.7505 -0.755,-3.3251 -1.934,-4.4307 0.222,-0.402 0.356,-0.8877 0.356,-1.3735 0,-1.6416 -1.245,-2.97339 -3.246,-2.97339 z m 1.845,5.41069 c 0.978,0.9966 1.49,2.1692 1.49,3.4088 0,2.0187 -1.29,3.7277 -3.046,4.3477 V 6.3194 c 0.535,-0.084 1.001,-0.201 1.556,-0.5109 z m 10.549,9.3725 v -2.948 h 0.731 V 10.834 H 52.642 V 3.857 c 0,-1.3067 -0.134,-1.8427 -0.555,-2.4624 -0.538,-0.75389 -1.377,-1.17267 -2.426,-1.17267 -1.153,0 -2.126,0.57791 -2.619,1.54957 -0.245,0.5108 -0.334,0.9966 -0.334,2.1944 v 6.8681 h -0.734 v 1.399 h 0.734 v 2.948 h 1.49 v -2.948 h 2.957 v 2.948 z M 51.155,10.834 H 48.198 V 3.2623 c 0,-1.0051 0.621,-1.6667 1.555,-1.6667 0.864,0 1.402,0.6448 1.402,1.6416 z m 4.99,-9.0374 c 0.865,0 1.579,0.7119 1.579,1.5746 0,0.8626 -0.714,1.5494 -1.579,1.5494 z M 55.859,0.39781 H 54.657 V 15.274 c 0.489,0 0.976,-0.08 1.488,-0.201 2.603,-0.671 4.536,-3.058 4.536,-5.8976 0,-1.7505 -0.756,-3.3251 -1.933,-4.4307 0.219,-0.402 0.353,-0.8877 0.353,-1.3735 0,-1.6416 -1.242,-2.97339 -3.242,-2.97339 z m 1.838,5.41069 c 0.984,0.9966 1.496,2.1692 1.496,3.4088 0,2.0187 -1.292,3.7277 -3.048,4.3477 V 6.3194 c 0.537,-0.084 0.999,-0.201 1.552,-0.5109 z m 9.066,9.3725 V 13.783 H 63.807 V 4.7615 h 3.712 V 3.3712 H 63.807 V 1.7966 h 2.956 V 0.39781 H 62.318 V 3.3712 h -0.739 v 1.3903 h 0.739 V 15.181 Z m 3.193,-7.3792 c 0.569,0.5528 1.552,1.3066 1.552,2.7732 0,1.767 -1.444,3.208 -3.242,3.208 v 1.491 c 2.621,0 4.729,-2.111 4.729,-4.699 0,-0.8049 -0.2,-1.5588 -0.419,-1.9523 C 72.131,7.7348 71.592,7.2239 71.038,6.7632 70.08,5.9592 69.754,5.3227 69.754,4.4767 c 0,-1.4824 1.201,-2.6801 2.688,-2.6801 V 0.31405 c -2.311,0 -4.176,1.85935 -4.176,4.16265 0,1.0386 0.437,2.1274 1.69,3.3251 z"
     fill={color}
     />
</>
      )
    case 'Apple':
      return (
        <path
          d="M65.8,49.692c-0.027-4.875,2.179-8.555,6.642-11.265-2.5-3.573-6.27-5.539-11.251-5.925-4.716-.372-9.87,2.75-11.756,2.75-1.993,0-6.562-2.617-10.149-2.617C31.877,32.756,24,38.547,24,50.33a33.088,33.088,0,0,0,1.913,10.786c1.7,4.875,7.837,16.831,14.24,16.631,3.348-.08,5.712-2.378,10.069-2.378,4.224,0,6.416,2.378,10.149,2.378C66.827,77.655,72.379,66.789,74,61.9c-8.661-4.078-8.2-11.955-8.2-12.208h0ZM58.285,27.881a12.511,12.511,0,0,0,3.188-9.631,14.086,14.086,0,0,0-9.02,4.636,12.707,12.707,0,0,0-3.4,9.551C52.52,32.7,55.682,30.923,58.285,27.881Z"
          fill={color}
        />
      )
    case 'Facebook':
      return (
        <path
          d="M43.52,80V53.164H34.531V42.5H43.52V34.1C43.52,24.969,49.1,20,57.242,20a75.461,75.461,0,0,1,8.227.422v9.539H59.82c-4.43,0-5.285,2.109-5.285,5.191V42.5h10L63.16,53.164H54.535V80"
          fill={color}
        />
      )
    case 'Instagram':
      return (
        <path
          d="M50.007,34.62A15.38,15.38,0,1,0,65.387,50,15.355,15.355,0,0,0,50.007,34.62Zm0,25.379a10,10,0,1,1,10-10,10.017,10.017,0,0,1-10,10h0ZM69.6,33.991A3.587,3.587,0,1,1,66.016,30.4,3.579,3.579,0,0,1,69.6,33.991Zm10.186,3.641c-0.228-4.805-1.325-9.062-4.846-12.569s-7.764-4.6-12.569-4.846c-4.953-.281-19.8-0.281-24.75,0-4.792.228-9.049,1.325-12.569,4.832s-4.6,7.764-4.846,12.569c-0.281,4.953-.281,19.8,0,24.75,0.228,4.805,1.325,9.062,4.846,12.569s7.764,4.6,12.569,4.846c4.953,0.281,19.8.281,24.75,0,4.805-.228,9.062-1.325,12.569-4.846s4.6-7.764,4.846-12.569c0.281-4.953.281-19.784,0-24.736h0Zm-6.4,30.05a10.123,10.123,0,0,1-5.7,5.7c-3.949,1.566-13.318,1.2-17.682,1.2s-13.747.348-17.682-1.2a10.123,10.123,0,0,1-5.7-5.7c-1.566-3.949-1.2-13.318-1.2-17.682s-0.348-13.747,1.2-17.682a10.123,10.123,0,0,1,5.7-5.7c3.949-1.566,13.318-1.2,17.682-1.2s13.747-.348,17.682,1.2a10.123,10.123,0,0,1,5.7,5.7C74.957,36.267,74.6,45.636,74.6,50S74.957,63.747,73.391,67.682Z"
          fill={color}
        />
      )
    case 'Soundcloud':
      return (
        <path
          d="M28.816,50.025l0.589,6.6-0.589,6.938a0.48,0.48,0,0,1-.447.447,0.44,0.44,0,0,1-.427-0.447l-0.569-6.938,0.569-6.6a0.436,0.436,0,0,1,.427-0.427A0.487,0.487,0,0,1,28.816,50.025Zm2.174-4.632a0.523,0.523,0,0,0-.508.508L29.974,56.628l0.508,6.938a0.523,0.523,0,0,0,.508.508,0.5,0.5,0,0,0,.477-0.508l0.589-6.938L31.467,45.9A0.5,0.5,0,0,0,30.99,45.393Zm2.59-2.448a0.562,0.562,0,0,0-.569.538L32.564,56.689l0.447,6.887a0.562,0.562,0,0,0,.569.538,0.535,0.535,0,0,0,.538-0.538l0.538-6.887L34.118,43.484a0.535,0.535,0,0,0-.538-0.538h0ZM18.231,52.758a0.273,0.273,0,0,0-.254.254L17.5,56.628l0.477,3.555a0.254,0.254,0,0,0,.508,0l0.569-3.555-0.569-3.616a0.273,0.273,0,0,0-.254-0.254h0Zm2.4-2.225a0.251,0.251,0,0,0-.254.254l-0.65,5.841,0.65,5.7a0.26,0.26,0,0,0,.254.284,0.3,0.3,0,0,0,.284-0.254l0.731-5.729-0.731-5.841A0.3,0.3,0,0,0,20.629,50.533Zm2.57-1.158a0.352,0.352,0,0,0-.335.335l-0.589,6.917,0.589,6.684a0.366,0.366,0,0,0,.335.315,0.316,0.316,0,0,0,.315-0.315l0.7-6.684-0.7-6.917a0.321,0.321,0,0,0-.315-0.335h0Zm2.57-.223a0.358,0.358,0,0,0-.366.366l-0.589,7.11L25.4,63.515a0.358,0.358,0,0,0,.366.366,0.4,0.4,0,0,0,.4-0.366l0.65-6.887-0.65-7.11a0.4,0.4,0,0,0-.4-0.366h0ZM50.289,37.887a0.794,0.794,0,0,0-.427-0.142,0.934,0.934,0,0,0-.569.193,1.041,1.041,0,0,0-.335.681V38.7L48.624,56.648l0.173,3.3,0.173,3.22a0.928,0.928,0,0,0,.9.874,0.88,0.88,0,0,0,.874-0.874l0.4-6.521-0.4-18.03a0.978,0.978,0,0,0-.457-0.731h0Zm-2.712,1.554A0.893,0.893,0,0,0,47.13,39.3a0.862,0.862,0,0,0-.447.142,0.8,0.8,0,0,0-.366.681l-0.03.173L46,56.628s0,0.03.315,6.664v0.03a0.766,0.766,0,0,0,.173.477,0.871,0.871,0,0,0,.65.315,0.824,0.824,0,0,0,.569-0.254,0.7,0.7,0,0,0,.254-0.569l0.03-.681,0.315-5.952L47.974,40.122a0.911,0.911,0,0,0-.4-0.681h0ZM36.262,41.726a0.617,0.617,0,0,0-.589.62L35.225,56.628l0.447,6.826a0.6,0.6,0,0,0,1.209,0l0.508-6.826L36.881,42.346a0.636,0.636,0,0,0-.62-0.62h0Zm38.265,6.379a8.158,8.158,0,0,0-3.108.62,14.117,14.117,0,0,0-14.048-12.84,13.852,13.852,0,0,0-5.109.955,0.89,0.89,0,0,0-.792.935V63.139a0.957,0.957,0,0,0,.874.935H74.516a7.984,7.984,0,0,0,.01-15.968h0ZM44.388,41.98a0.806,0.806,0,0,0-.792.792L43.26,56.658,43.6,63.322a0.8,0.8,0,0,0,.792.762,0.754,0.754,0,0,0,.762-0.762l0.4-6.664-0.4-13.886a0.781,0.781,0,0,0-.762-0.792h0Zm-5.445-.792a0.689,0.689,0,0,0-.65.681L37.9,56.628l0.4,6.8a0.666,0.666,0,0,0,1.331,0l0.447-6.8L39.624,41.869A0.716,0.716,0,0,0,38.943,41.188Zm2.712,0.345a0.7,0.7,0,0,0-.7.7l-0.4,14.394,0.4,6.745a0.716,0.716,0,0,0,.7.7,0.7,0.7,0,0,0,.7-0.7l0.427-6.745L42.356,42.234a0.69,0.69,0,0,0-.7-0.7h0Z"
          fill={color}
        />
      )
    case 'Spotify':
      return (
        <>
          <path
            d="M65.92,68.165a2.971,2.971,0,0,1-1.666-.561c-9.717-5.855-21.022-6.1-32.187-3.815a10.055,10.055,0,0,1-1.853.4,2.424,2.424,0,0,1-2.46-2.46,2.468,2.468,0,0,1,2.118-2.616C42.624,56.3,55.658,56.548,66.776,63.2a2.633,2.633,0,0,1,1.51,2.569,2.353,2.353,0,0,1-2.367,2.4h0Z"
            fill={color}
          />
          <path
            d="M70.108,57.949a3.845,3.845,0,0,1-1.915-.654c-9.732-5.762-24.245-8.082-37.155-4.578a6.413,6.413,0,0,1-1.853.4A3.024,3.024,0,0,1,26.164,50.1a3.064,3.064,0,0,1,2.414-3.223A52.377,52.377,0,0,1,43.807,44.76c10.106,0,19.87,2.507,27.562,7.085a3.246,3.246,0,0,1,1.76,3.068A3.017,3.017,0,0,1,70.108,57.949Z"
            fill={color}
          />
          <path
            d="M74.936,46.084a3.581,3.581,0,0,1-2.009-.607c-11.087-6.618-30.91-8.206-43.742-4.625a7.4,7.4,0,0,1-2.009.4,3.594,3.594,0,0,1-3.628-3.675,3.679,3.679,0,0,1,2.71-3.722,65.264,65.264,0,0,1,18.3-2.367c11.367,0,23.28,2.367,31.985,7.443a3.656,3.656,0,0,1,2.009,3.519,3.608,3.608,0,0,1-3.613,3.628h0Z"
            fill={color}
          />
        </>
      )
    case 'Twitter':
      return (
        <path
          d="M69.861,39.816c0.032,0.444.032,0.888,0.032,1.333C69.892,54.7,59.581,70.3,40.736,70.3A28.958,28.958,0,0,1,25,65.7a21.2,21.2,0,0,0,2.475.127A20.523,20.523,0,0,0,40.2,61.453a10.266,10.266,0,0,1-9.581-7.107,12.923,12.923,0,0,0,1.935.159,10.838,10.838,0,0,0,2.7-.349A10.249,10.249,0,0,1,27.03,44.1V43.972a10.32,10.32,0,0,0,4.632,1.3A10.263,10.263,0,0,1,28.49,31.567,29.128,29.128,0,0,0,49.619,42.291a11.568,11.568,0,0,1-.254-2.348A10.257,10.257,0,0,1,67.1,32.931a20.175,20.175,0,0,0,6.5-2.475A10.22,10.22,0,0,1,69.1,36.1,20.543,20.543,0,0,0,75,34.518a22.028,22.028,0,0,1-5.139,5.3h0Z"
          fill={color}
        />
      )
    case 'YouTube':
      return (
        <path
          d="M76.351,36.715a6.911,6.911,0,0,0-4.863-4.894C67.2,30.664,50,30.664,50,30.664s-17.2,0-21.488,1.157a6.911,6.911,0,0,0-4.863,4.894C22.5,41.032,22.5,50.039,22.5,50.039s0,9.007,1.149,13.324a6.808,6.808,0,0,0,4.863,4.816C32.8,69.336,50,69.336,50,69.336s17.2,0,21.488-1.157a6.808,6.808,0,0,0,4.863-4.816C77.5,59.046,77.5,50.039,77.5,50.039S77.5,41.032,76.351,36.715Zm-31.976,21.5V41.861L58.75,50.039,44.375,58.217h0Z"
          fill={color}
        />
      )
    case 'Github':
      return (
        <path
          d="M50,20.056a30.705,30.705,0,0,0-9.7,59.835c1.535.282,2.1-.666,2.1-1.48,0-.728-.027-2.659-.042-5.221-8.54,1.855-10.342-4.116-10.342-4.116-1.4-3.547-3.409-4.491-3.409-4.491-2.787-1.905.211-1.866.211-1.866,3.081.217,4.7,3.164,4.7,3.164,2.739,4.691,7.186,3.337,8.935,2.551A6.564,6.564,0,0,1,44.4,64.327c-6.817-.775-13.985-3.409-13.985-15.174a11.866,11.866,0,0,1,3.161-8.238,11.039,11.039,0,0,1,.3-8.126s2.577-.825,8.442,3.148a29.087,29.087,0,0,1,15.373,0c5.862-3.973,8.435-3.148,8.435-3.148a11.027,11.027,0,0,1,.3,8.126,11.844,11.844,0,0,1,3.156,8.238c0,11.8-7.178,14.39-14.018,15.15,1.1.948,2.084,2.822,2.084,5.686,0,4.1-.037,7.416-.037,8.422,0,.821.553,1.777,2.111,1.477A30.707,30.707,0,0,0,50,20.056Z"
          fill={color}
        />
      )
    case 'Arrow':
      return (
        <polygon
          points="51.829 7.172 46.172 12.828 79.343 46 4 46 4 54 79.343 54 46.172 87.172 51.829 92.828 94.658 50 51.829 7.172"
          fill={color}
        />
      )
    case 'Plus':
      return (
        <polygon
          points="80 46 54 46 54 20 46 20 46 46 20 46 20 54 46 54 46 80 54 80 54 54 80 54 80 46"
          fill={color}
        />
      )
    case 'Minus':
      return <rect x="20" y="46" width="60" height="8" fill={color} />
    case 'Checkmark':
      return (
        <path
          fill="none"
          stroke={color}
          strokeWidth="13"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="M12.1 52.1l24.4 24.4 53-53"
        />
      )
    case 'Chevron Down':
      return (
        <polygon
          points="51.5 85.657 8.672 42.828 14.328 37.172 51.5 74.343 88.672 37.172 94.328 42.828 51.5 85.657"
          fill={color}
        />
      )
    default:
      return <path />
  }
}

const Icon = (props) => {
  const { id = '', name, color, viewBox = '0 0 100 100', className } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      aria-labelledby={`${name.replace(/\s/g, '').toLowerCase()}-${id}`}
      className={className || 'icon'}
    >
      <title id={`${name.replace(/\s/g, '').toLowerCase()}-${id}`}>
        {name}
      </title>
      {getIcon(name, color)}
    </svg>
  )
}

export default Icon
