import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  return (
    <>
      <section className="flex fixed top-0 w-full border-gray-300 border-b bg-white">
        <div className="container lg:max-w-5xl mx-auto flex justify-between items-center h-14">
          <div className="ml-8 mt-2 lg:m-4">
            <a href="">
              <img
                src={`${router.basePath}/assets/images/instagram-logo.png`}
                className="w-34"
                alt="Instagram"
              />
            </a>
          </div>

          <div className="m-4 hidden lg:block">
            <input
              className="focus:outline-none border h-7 text-sm border-gray-300 p-1 text-center bg-gray-100 rounded-sm ml-5"
              type="text"
              placeholder="Search"
            />
          </div>

          <nav className="m-4">
            <ul className="flex">
              <li className="m-2 lg:m-3">
                <a href="#home">
                  <svg
                    aria-label="Home"
                    fill="#262626"
                    height="22"
                    role="img"
                    viewBox="0 0 48 48"
                    width="22"
                  >
                    <path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z" />
                  </svg>{' '}
                </a>
              </li>
              <li className="m-2 lg:m-3 relative">
                <a
                  href="#chat"
                  className="text-xs text-white text-center leading-5"
                >
                  <span className="block absolute bg-red-700 w-5 h-5 -top-2 -right-3 rounded-full">
                    12
                  </span>
                  <svg
                    aria-label="Messenger"
                    fill="#262626"
                    height="22"
                    role="img"
                    viewBox="0 0 48 48"
                    width="22"
                  >
                    <path d="M36.2 16.7L29 22.2c-.5.4-1.2.4-1.7 0l-5.4-4c-1.6-1.2-3.9-.8-5 .9l-6.8 10.7c-.7 1 .6 2.2 1.6 1.5l7.3-5.5c.5-.4 1.2-.4 1.7 0l5.4 4c1.6 1.2 3.9.8 5-.9l6.8-10.7c.6-1.1-.7-2.2-1.7-1.5zM24 1C11 1 1 10.5 1 23.3 1 30 3.7 35.8 8.2 39.8c.4.3.6.8.6 1.3l.2 4.1c0 1 .9 1.8 1.8 1.8.2 0 .5 0 .7-.2l4.6-2c.2-.1.5-.2.7-.2.2 0 .3 0 .5.1 2.1.6 4.3.9 6.7.9 13 0 23-9.5 23-22.3S37 1 24 1zm0 41.6c-2 0-4-.3-5.9-.8-.4-.1-.8-.2-1.3-.2-.7 0-1.3.1-2 .4l-3 1.3V41c0-1.3-.6-2.5-1.6-3.4C6.2 34 4 28.9 4 23.3 4 12.3 12.6 4 24 4s20 8.3 20 19.3-8.6 19.3-20 19.3z" />
                  </svg>
                </a>
              </li>
              <li className="m-2 lg:m-3">
                <a href="#explore">
                  <svg
                    aria-label="Find People"
                    fill="#262626"
                    height="22"
                    role="img"
                    viewBox="0 0 48 48"
                    width="22"
                  >
                    <path
                      clipRule="evenodd"
                      d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z"
                      fillRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li className="m-2 lg:m-3">
                <a href="#activity">
                  <svg
                    aria-label="Activity Feed"
                    fill="#262626"
                    height="22"
                    role="img"
                    viewBox="0 0 48 48"
                    width="22"
                  >
                    <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
                  </svg>
                </a>
              </li>
              <li className="m-1 lg:m-2 border rounded-full">
                <a href="#profile">
                  <img
                    src={`${router.basePath}/assets/images/brendan.png`}
                    className="w-7 h-7 rounded-full "
                    alt="Tailwind"
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <section className="container lg:max-w-5xl grid grid-cols-3 lg:gap-5 mx-auto h-screen">
        <div className="mt-16 lg:mt-18 col-span-3 lg:col-span-2 ">
          <div className="h-36 rounded-sm border bg-white border-gray-300">
            <nav>
              <ul className="flex h-36 justify-start items-center text-center overflow-x-hidden">
                <li className="ml-5">
                  <a href="#" className="text-xs text-gray-700">
                    <div
                      className="flex justify-center items-center w-20 h-20 rounded-full bg-gradient-to-t 0
                  from-yellow-400 via-red-700 to-purple-600 overflow-hidden p-1"
                    >
                      <img
                        src={`${router.basePath}/assets/images/brendan.png`}
                        className="w-24 border-2 border-white rounded-full"
                        alt="Brendan"
                      />
                    </div>
                    Brendan
                  </a>
                </li>
                <li className="ml-5">
                  <a href="#" className="text-xs text-gray-700">
                    <div
                      className="flex justify-center items-center w-20 h-20 rounded-full bg-gradient-to-t 
                  from-yellow-400 via-red-700 to-purple-600 overflow-hidden p-1"
                    >
                      <img
                        src={`${router.basePath}/assets/images/steve.png`}
                        className="w-24 border-2 border-white rounded-full"
                        alt="Steve Wozniak"
                      />
                    </div>
                    Wozniak
                  </a>
                </li>
                <li className="ml-5">
                  <a href="#" className="text-xs text-gray-700">
                    <div
                      className="flex justify-center items-center w-20 h-20 rounded-full bg-gradient-to-t 0
                  from-yellow-400 via-red-700 to-purple-600 overflow-hidden p-1"
                    >
                      <img
                        src={`${router.basePath}/assets/images/ramus.jpg`}
                        className="w-24 border-2 border-white rounded-full"
                        alt="Rasmus"
                      />
                    </div>
                    Rasmus
                  </a>
                </li>
                <li className="ml-5">
                  <a href="#" className="text-xs text-gray-700">
                    <div
                      className="flex justify-center items-center w-20 h-20 rounded-full bg-gradient-to-t 0
                  from-yellow-400 via-red-700 to-purple-600 overflow-hidden p-1"
                    >
                      <img
                        src={`${router.basePath}/assets/images/james.jpg`}
                        className="w-24 border-2 border-white rounded-full"
                        alt="James"
                      />
                    </div>
                    James
                  </a>
                </li>
                <li className="ml-5">
                  <a href="#" className="text-xs text-gray-700">
                    <div
                      className="flex justify-center items-center w-20 h-20 rounded-full bg-gradient-to-t 0
                  from-yellow-400 via-red-700 to-purple-600 overflow-hidden p-1"
                    >
                      <img
                        src={`${router.basePath}/assets/images/matsumoto.jpg`}
                        className="w-24 border-2 border-white rounded-full"
                        alt="Matsumoto"
                      />
                    </div>
                    Matsumoto
                  </a>
                </li>
                <li className="ml-5">
                  <a href="#" className="text-xs text-gray-700">
                    <div
                      className="flex justify-center items-center w-20 h-20 rounded-full bg-gradient-to-t 0
                  from-yellow-400 via-red-700 to-purple-600 overflow-hidden p-1"
                    >
                      <img
                        src={`${router.basePath}/assets/images/jose.jpg`}
                        className="w-24 border-2 border-white rounded-full"
                        alt="José"
                      />
                    </div>
                    José
                  </a>
                </li>
                <li className="ml-5">
                  <a href="#" className="text-xs text-gray-700">
                    <div
                      className="flex justify-center items-center w-20 h-20 rounded-full bg-gradient-to-t 0
                  from-yellow-400 via-red-700 to-purple-600 overflow-hidden p-1"
                    >
                      <img
                        src={`${router.basePath}/assets/images/ritchie.png`}
                        className="w-24 border-2 border-white rounded-full"
                        alt="Ritchie"
                      />
                    </div>
                    Ritchie
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <main className="-mt-1 lg:mt-8  mb-10">
            <div className="container flex flex-col lg:mb-7 rounded-sm lg:border lg:border-gray-300 bg-white pb-4">
              <div className="container flex items-center h-16 justify-between  border-b">
                <div className="flex ml-6 items-center">
                  <img
                    className="w-9 h-9 rounded-full"
                    src={`${router.basePath}/assets/images/forza-horizon-5-perfil.png`}
                    alt=""
                  />
                  <h3 className="font-bold text-sm text-gray-800 ml-4">
                    <a href="#">forzahorizonofficial</a>
                  </h3>
                </div>
                <div className="mr-4">
                  <a href="#">
                    <svg
                      aria-label="More options"
                      fill="#262626"
                      height="16"
                      role="img"
                      viewBox="0 0 48 48"
                      width="16"
                    >
                      <circle
                        clipRule="evenodd"
                        cx="8"
                        cy="24"
                        fillRule="evenodd"
                        r="4.5"
                      />
                      <circle
                        clipRule="evenodd"
                        cx="24"
                        cy="24"
                        fillRule="evenodd"
                        r="4.5"
                      />
                      <circle
                        clipRule="evenodd"
                        cx="40"
                        cy="24"
                        fillRule="evenodd"
                        r="4.5"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <a href="#">
                  {' '}
                  <img
                    src={`${router.basePath}/assets/images/forza-horizon-5.png`}
                    className="w-full mt-o"
                    alt=""
                  />
                </a>
              </div>

              <div className="flex justify-around px-2">
                <nav className="w-1/3">
                  <ul className="flex items-center justify-start">
                    <li className="m-2">
                      <a href="#activity">
                        <svg
                          aria-label="Activity Feed"
                          fill="#262626"
                          height="22"
                          role="img"
                          viewBox="0 0 48 48"
                          width="22"
                        >
                          <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
                        </svg>
                      </a>
                    </li>
                    <li className="m-2">
                      <a href="#activity">
                        <svg
                          aria-label="Comment"
                          fill="#262626"
                          height="24"
                          role="img"
                          viewBox="0 0 48 48"
                          width="24"
                        >
                          <path
                            clipRule="evenodd"
                            d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                            fillRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li className="m-2">
                      <a href="#activity">
                        <svg
                          aria-label="Share Post"
                          fill="#262626"
                          height="24"
                          role="img"
                          viewBox="0 0 48 48"
                          width="24"
                        >
                          <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </nav>
                <nav className="w-1/3 flex justify-center overflow-hidden">
                  <ul className="flex justify-center items-center">
                    <li>
                      <a
                        href="#"
                        className="inline-block bg-blue-400 rounded-full p-1 m-1"
                      />
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-block bg-gray-400 hover:bg-blue-400 rounded-full p-1 m-1"
                      />
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-block bg-gray-400 hover:bg-blue-400 rounded-full p-1 m-1"
                      />
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-block bg-gray-400 hover:bg-blue-400 rounded-full p-1 m-1"
                      />
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-block bg-gray-400 hover:bg-blue-400 rounded-full p-1 m-1"
                      />
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-block bg-gray-400 hover:bg-blue-400 rounded-full p-1 m-1"
                      />
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-block bg-gray-400 hover:bg-blue-400 rounded-full p-1 m-1"
                      />
                    </li>
                  </ul>
                </nav>
                <div className="w-1/3 flex justify-end p-2">
                  <a href="#">
                    <svg
                      aria-label="Save"
                      fill="#262626"
                      height="24"
                      role="img"
                      viewBox="0 0 48 48"
                      width="24"
                    >
                      <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex justify-start items-center h-10 px-2 ml-2 text-gray-900">
                <a href="#profile">
                  <img
                    src={`${router.basePath}/assets/images/steve.png`}
                    className="w-7 h-7 rounded-full mr-1"
                    alt="Tailwind"
                  />
                </a>
                <p>
                  Liked by
                  <a href="#profile" className="font-bold">
                    sidnei.simiao
                  </a>
                  and
                  <a href="#profile" className="font-bold">
                    45,232 others
                  </a>
                </p>
              </div>

              <div className="flex flex-col pb-1">
                <div className="h-auto px-2 ml-2 text-gray-800">
                  <p>
                    <a href="#profile" className="font-bold">
                      forzahorizonofficial
                    </a>
                    Here's every
                    <a href="#profile" className="text-blue-500">
                      @Mercedes
                    </a>
                    comming to
                    <a href="#profile" className="text-blue-500">
                      #ForzaHorizon5
                    </a>
                    on Day 1.
                  </p>
                  <a href="">
                    <p className="text-sm text-gray-400">
                      View all 1,967 comments
                    </p>
                  </a>
                </div>
                <div className="h-auto px-2 ml-2 text-gray-800">
                  <p>
                    <a href="#profile" className="font-bold">
                      simmon
                    </a>
                    Free??
                    <a href="">
                      <svg
                        className="float-right mt-2"
                        aria-label="Like"
                        fill="#262626"
                        height="12"
                        role="img"
                        viewBox="0 0 48 48"
                        width="12"
                      >
                        <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
                      </svg>
                    </a>
                  </p>
                </div>
                <div className="h-auto px-2 ml-2 text-gray-800">
                  <p>
                    <a href="#profile" className="font-bold">
                      joseh.js
                    </a>
                    Boutta get mad hate, but in my opinion Mercedes is overrated
                    <svg
                      className="float-right mt-2"
                      aria-label="Like"
                      fill="#262626"
                      height="12"
                      role="img"
                      viewBox="0 0 48 48"
                      width="12"
                    >
                      <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
                    </svg>
                  </p>
                </div>
                <div className="h-auto px-2 ml-2 text-gray-800">
                  <p>
                    <a href="#profile" className="font-bold">
                      alex.node
                    </a>
                    BouI wanna s63 amg plssss
                    <svg
                      className="float-right mt-2"
                      aria-label="Like"
                      fill="#262626"
                      height="12"
                      role="img"
                      viewBox="0 0 48 48"
                      width="12"
                    >
                      <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
                    </svg>
                  </p>
                  <a href="">
                    <p className="text-xs text-gray-400 mt-1">2 DAYS AGO</p>
                  </a>
                </div>
              </div>
              <div
                className="hidden lg:flex justify-start items-center h-10 px-2 pl-4 pt-3 mt-3
          text-gray-900 border-t"
              >
                <svg
                  aria-label="Emoji"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 48 48"
                  width="24"
                >
                  <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z" />
                  <path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z" />
                </svg>
                <input
                  placeholder="Add a comment..."
                  className="focus:outline-none focus:text-gray-800 text-gray-400 text-sm w-5/6 h-10 m-2 leading-10 pl-2"
                />
                <button className="font-bold text-sm text-blue-200 hover:text-blue-400">
                  Post
                </button>
              </div>
            </div>

            <div className="container flex flex-col lg:mb-7 rounded-sm lg:border lg:border-gray-300 bg-white pb-4">
              <div className="container flex items-center h-16 justify-between  border-b">
                <div className="flex ml-6 items-center">
                  <img
                    className="w-9 h-9 rounded-full"
                    src={`${router.basePath}/assets/images/forza-horizon-5-perfil.png`}
                    alt=""
                  />
                  <h3 className="font-bold text-sm text-gray-800 ml-4">
                    <a href="#">forzahorizonofficial</a>
                  </h3>
                </div>
                <div className="mr-4">
                  <a href="#">
                    <svg
                      aria-label="More options"
                      fill="#262626"
                      height="16"
                      role="img"
                      viewBox="0 0 48 48"
                      width="16"
                    >
                      <circle
                        clipRule="evenodd"
                        cx="8"
                        cy="24"
                        fillRule="evenodd"
                        r="4.5"
                      />
                      <circle
                        clipRule="evenodd"
                        cx="24"
                        cy="24"
                        fillRule="evenodd"
                        r="4.5"
                      />
                      <circle
                        clipRule="evenodd"
                        cx="40"
                        cy="24"
                        fillRule="evenodd"
                        r="4.5"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <a href="#">
                  <img
                    src={`${router.basePath}/assets/images/forza-horizon-5-art-1.png`}
                    className="w-full mt-o"
                    alt=""
                  />
                </a>
              </div>

              <div className="flex justify-around px-2">
                <nav className="w-1/3">
                  <ul className="flex items-center justify-start">
                    <li className="m-2">
                      <a href="#activity">
                        <svg
                          aria-label="Activity Feed"
                          fill="#262626"
                          height="22"
                          role="img"
                          viewBox="0 0 48 48"
                          width="22"
                        >
                          <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
                        </svg>
                      </a>
                    </li>
                    <li className="m-2">
                      <a href="#activity">
                        <svg
                          aria-label="Comment"
                          fill="#262626"
                          height="24"
                          role="img"
                          viewBox="0 0 48 48"
                          width="24"
                        >
                          <path
                            clipRule="evenodd"
                            d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                            fillRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li className="m-2">
                      <a href="#activity">
                        <svg
                          aria-label="Share Post"
                          fill="#262626"
                          height="24"
                          role="img"
                          viewBox="0 0 48 48"
                          width="24"
                        >
                          <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </nav>
                <nav className="w-1/3 flex justify-center overflow-hidden">
                  <ul className="flex justify-center items-center">
                    <li>
                      <a
                        href="#"
                        className="inline-block bg-blue-400 rounded-full p-1 m-1"
                      />
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-block bg-gray-400 hover:bg-blue-400 rounded-full p-1 m-1"
                      />
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-block bg-gray-400 hover:bg-blue-400 rounded-full p-1 m-1"
                      />
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-block bg-gray-400 hover:bg-blue-400 rounded-full p-1 m-1"
                      />
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-block bg-gray-400 hover:bg-blue-400 rounded-full p-1 m-1"
                      />
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-block bg-gray-400 hover:bg-blue-400 rounded-full p-1 m-1"
                      />
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-block bg-gray-400 hover:bg-blue-400 rounded-full p-1 m-1"
                      />
                    </li>
                  </ul>
                </nav>
                <div className="w-1/3 flex justify-end p-2">
                  <a href="#">
                    <svg
                      aria-label="Save"
                      fill="#262626"
                      height="24"
                      role="img"
                      viewBox="0 0 48 48"
                      width="24"
                    >
                      <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex justify-start items-center h-10 px-2 ml-2 text-gray-900">
                <a href="#profile">
                  <img
                    src={`${router.basePath}/assets/images/steve.png`}
                    className="w-7 h-7 rounded-full mr-1"
                    alt="Tailwind"
                  />
                </a>
                <p>
                  Liked by
                  <a href="#profile" className="font-bold">
                    sidnei.simiao
                  </a>
                  and
                  <a href="#profile" className="font-bold">
                    45,232 others
                  </a>
                </p>
              </div>

              <div className="flex flex-col pb-1">
                <div className="h-auto px-2 ml-2 text-gray-800">
                  <p>
                    <a href="#profile" className="font-bold">
                      forzahorizonofficial
                    </a>
                    Here every
                    <a href="#profile" className="text-blue-500">
                      @Mercedes
                    </a>
                    comming to
                    <a href="#profile" className="text-blue-500">
                      #ForzaHorizon5
                    </a>
                    on Day 1.
                  </p>
                  <a href="">
                    <p className="text-sm text-gray-400">
                      View all 1,967 comments
                    </p>
                  </a>
                </div>
                <div className="h-auto px-2 ml-2 text-gray-800">
                  <p>
                    <a href="#profile" className="font-bold">
                      simmon
                    </a>
                    Free??
                    <a href="">
                      <svg
                        className="float-right mt-2"
                        aria-label="Like"
                        fill="#262626"
                        height="12"
                        role="img"
                        viewBox="0 0 48 48"
                        width="12"
                      >
                        <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
                      </svg>
                    </a>
                  </p>
                </div>
                <div className="h-auto px-2 ml-2 text-gray-800">
                  <p>
                    <a href="#profile" className="font-bold">
                      joseh.js
                    </a>
                    Boutta get mad hate, but in my opinion Mercedes is overrated
                    <svg
                      className="float-right mt-2"
                      aria-label="Like"
                      fill="#262626"
                      height="12"
                      role="img"
                      viewBox="0 0 48 48"
                      width="12"
                    >
                      <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
                    </svg>
                  </p>
                </div>
                <div className="h-auto px-2 ml-2 text-gray-800">
                  <p>
                    <a href="#profile" className="font-bold">
                      alex.node
                    </a>
                    BouI wanna s63 amg plssss
                    <svg
                      className="float-right mt-2"
                      aria-label="Like"
                      fill="#262626"
                      height="12"
                      role="img"
                      viewBox="0 0 48 48"
                      width="12"
                    >
                      <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
                    </svg>
                  </p>
                  <a href="">
                    <p className="text-xs text-gray-400 mt-1">2 DAYS AGO</p>
                  </a>
                </div>
              </div>
              <div className="hidden lg:flex justify-start items-center h-10 px-2 pl-4 pt-3 mt-3text-gray-900 border-t">
                <svg
                  aria-label="Emoji"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 48 48"
                  width="24"
                >
                  <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z" />
                  <path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z" />
                </svg>
                <input
                  placeholder="Add a comment..."
                  className="focus:outline-none focus:text-gray-800 text-gray-400 text-sm w-5/6 h-10 m-2 leading-10 pl-2"
                />
                <button
                  type="button"
                  className="font-bold text-sm text-blue-200 hover:text-blue-400"
                >
                  Post
                </button>
              </div>
            </div>

            <div className="container flex flex-col lg:mb-7 rounded-sm lg:border border-gray-300 bg-white pb-4">
              <div className="container flex items-center h-16 justify-between  border-b">
                <div className="flex ml-6 items-center">
                  <img
                    className="w-9 h-9 rounded-full"
                    src={`${router.basePath}/assets/images/forza-horizon-5-perfil.png`}
                    alt=""
                  />
                  <h3 className="font-bold text-sm text-gray-800 ml-4">
                    <a href="#">forzahorizonofficial</a>
                  </h3>
                </div>
                <div className="mr-4">
                  <a href="#">
                    <svg
                      aria-label="More options"
                      fill="#262626"
                      height="16"
                      role="img"
                      viewBox="0 0 48 48"
                      width="16"
                    >
                      <circle
                        clipRule="evenodd"
                        cx="8"
                        cy="24"
                        fillRule="evenodd"
                        r="4.5"
                      />
                      <circle
                        clipRule="evenodd"
                        cx="24"
                        cy="24"
                        fillRule="evenodd"
                        r="4.5"
                      />
                      <circle
                        clipRule="evenodd"
                        cx="40"
                        cy="24"
                        fillRule="evenodd"
                        r="4.5"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <a href="#">
                  <img
                    src={`${router.basePath}/assets/images/forza-horizon-5-art-2.png`}
                    className="w-full mt-o"
                    alt=""
                  />
                </a>
              </div>

              <div className="flex justify-around px-2">
                <nav className="w-1/3">
                  <ul className="flex items-center justify-start">
                    <li className="m-2">
                      <a href="#activity">
                        <svg
                          aria-label="Activity Feed"
                          fill="#262626"
                          height="22"
                          role="img"
                          viewBox="0 0 48 48"
                          width="22"
                        >
                          <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
                        </svg>
                      </a>
                    </li>
                    <li className="m-2">
                      <a href="#activity">
                        <svg
                          aria-label="Comment"
                          fill="#262626"
                          height="24"
                          role="img"
                          viewBox="0 0 48 48"
                          width="24"
                        >
                          <path
                            clipRule="evenodd"
                            d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                            fillRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li className="m-2">
                      <a href="#activity">
                        <svg
                          aria-label="Share Post"
                          fill="#262626"
                          height="24"
                          role="img"
                          viewBox="0 0 48 48"
                          width="24"
                        >
                          <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </nav>
                <nav className="w-1/3 flex justify-center overflow-hidden">
                  <ul className="flex justify-center items-center">
                    <li>
                      <a
                        href="#"
                        className="inline-block bg-blue-400 rounded-full p-1 m-1"
                      />
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-block bg-gray-400 hover:bg-blue-400 rounded-full p-1 m-1"
                      />
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-block bg-gray-400 hover:bg-blue-400 rounded-full p-1 m-1"
                      />
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-block bg-gray-400 hover:bg-blue-400 rounded-full p-1 m-1"
                      />
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-block bg-gray-400 hover:bg-blue-400 rounded-full p-1 m-1"
                      />
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-block bg-gray-400 hover:bg-blue-400 rounded-full p-1 m-1"
                      />
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-block bg-gray-400 hover:bg-blue-400 rounded-full p-1 m-1"
                      />
                    </li>
                  </ul>
                </nav>
                <div className="w-1/3 flex justify-end p-2">
                  <a href="#">
                    <svg
                      aria-label="Save"
                      fill="#262626"
                      height="24"
                      role="img"
                      viewBox="0 0 48 48"
                      width="24"
                    >
                      <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex justify-start items-center h-10 px-2 ml-2 text-gray-900">
                <a href="#profile">
                  <img
                    src={`${router.basePath}/assets/images/steve.png`}
                    className="w-7 h-7 rounded-full mr-1"
                    alt="Tailwind"
                  />
                </a>
                <p>
                  Liked by
                  <a href="#profile" className="font-bold">
                    sidnei.simiao
                  </a>
                  and
                  <a href="#profile" className="font-bold">
                    45,232 others
                  </a>
                </p>
              </div>

              <div className="flex flex-col pb-1">
                <div className="h-auto px-2 ml-2 text-gray-800">
                  <p>
                    <a href="#profile" className="font-bold">
                      forzahorizonofficial
                    </a>
                    Heres every
                    <a href="#profile" className="text-blue-500">
                      @Mercedes
                    </a>
                    comming to
                    <a href="#profile" className="text-blue-500">
                      #ForzaHorizon5
                    </a>
                    on Day 1.
                  </p>
                  <a href="">
                    <p className="text-sm text-gray-400">
                      View all 1,967 comments
                    </p>
                  </a>
                </div>
                <div className="h-auto px-2 ml-2 text-gray-800">
                  <p>
                    <a href="#profile" className="font-bold">
                      simmon
                    </a>
                    Free??
                    <a href="">
                      <svg
                        className="float-right mt-2"
                        aria-label="Like"
                        fill="#262626"
                        height="12"
                        role="img"
                        viewBox="0 0 48 48"
                        width="12"
                      >
                        <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
                      </svg>
                    </a>
                  </p>
                </div>
                <div className="h-auto px-2 ml-2 text-gray-800">
                  <p>
                    <a href="#profile" className="font-bold">
                      joseh.js
                    </a>
                    Boutta get mad hate, but in my opinion Mercedes is overrated
                    <svg
                      className="float-right mt-2"
                      aria-label="Like"
                      fill="#262626"
                      height="12"
                      role="img"
                      viewBox="0 0 48 48"
                      width="12"
                    >
                      <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
                    </svg>
                  </p>
                </div>
                <div className="h-auto px-2 ml-2 text-gray-800">
                  <p>
                    <a href="#profile" className="font-bold">
                      alex.node
                    </a>
                    BouI wanna s63 amg plssss
                    <svg
                      className="float-right mt-2"
                      aria-label="Like"
                      fill="#262626"
                      height="12"
                      role="img"
                      viewBox="0 0 48 48"
                      width="12"
                    >
                      <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
                    </svg>
                  </p>
                  <a href="">
                    <p className="text-xs text-gray-400 mt-1">2 DAYS AGO</p>
                  </a>
                </div>
              </div>

              <div className="hidden lg:flex justify-start items-center h-10 px-2 pl-4 pt-3 mt-3 text-gray-900 border-t">
                <svg
                  aria-label="Emoji"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 48 48"
                  width="24"
                >
                  <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z" />
                  <path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z" />
                </svg>
                <input
                  placeholder="Add a comment..."
                  className="focus:outline-none focus:text-gray-800 text-gray-400 text-sm w-5/6 h-10 m-2 leading-10 pl-2"
                />
                <button
                  type="button"
                  className="font-bold text-sm text-blue-200 hover:text-blue-400"
                >
                  Post
                </button>
              </div>
            </div>
          </main>
        </div>

        <div className="hidden lg:flex flex-col col-span-3 lg:col-span-1 mt-28">
          <div className="">
            <div className="hidden lg:flex justify-start items-center w-full h-20 mb-4">
              <img
                className="w-16 h-16 m-2 rounded-full"
                src={`${router.basePath}/assets/images/brendan.png`}
                alt="John Done"
              />
              <div className="flex-1">
                <a className="font-bold text-sm text-gray-800" href="#">
                  brendaneich
                </a>
                <p className="text-gray-500">Brendan Eich</p>
              </div>
              <button type="button" className="text-blue-400 font-bold text-xs">
                Switch
              </button>
            </div>

            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-400">Suggestions For You</h3>
              <a href="#" className="font-bold text-xs text-gray-800">
                See All
              </a>
            </div>

            <div className="flex justify-start items-center w-full h-auto">
              <img
                className="w-10 h-10 m-2 rounded-full"
                src={`${router.basePath}/assets/images/steve.png`}
                alt="John Done"
              />
              <div className="flex-1">
                <a className="font-bold text-sm text-gray-800" href="#">
                  stevewozniak
                </a>
                <p className="text-gray-500 text-sm">
                  Followed by Rasmus + 45 mor
                </p>
              </div>
              <button type="button" className="text-blue-400 font-bold text-xs">
                Follow
              </button>
            </div>
            <div className="flex justify-start items-center w-full h-auto">
              <img
                className="w-10 h-10 m-2 rounded-full"
                src={`${router.basePath}/assets/images/jose.jpg`}
                alt="John Done"
              />
              <div className="flex-1">
                <a className="font-bold text-sm text-gray-800" href="#">
                  josevalim
                </a>
                <p className="text-gray-500 text-sm">
                  Followed by Matsumoto + 26 mor
                </p>
              </div>
              <button type="button" className="text-blue-400 font-bold text-xs">
                Follow
              </button>
            </div>
            <div className="flex justify-start items-center w-full h-auto">
              <img
                className="w-10 h-10 m-2 rounded-full"
                src={`${router.basePath}/assets/images/matsumoto.jpg`}
                alt="John Done"
              />
              <div className="flex-1">
                <a className="font-bold text-sm text-gray-800" href="#">
                  yukihiromatsumoto
                </a>
                <p className="text-gray-500 text-sm">
                  Followed by Brendan + 57 mor
                </p>
              </div>
              <button type="button" className="text-blue-400 font-bold text-xs">
                Follow
              </button>
            </div>
            <div className="flex justify-start items-center w-full h-auto">
              <img
                className="w-10 h-10 m-2 rounded-full"
                src={`${router.basePath}/assets/images/ritchie.png`}
                alt="John Done"
              />
              <div className="flex-1">
                <a className="font-bold text-sm text-gray-800" href="#">
                  dennisritchie
                </a>
                <p className="text-gray-500 text-sm">
                  Followed by Matsumoto + 5 mor
                </p>
              </div>
              <button type="button" className="text-blue-400 font-bold text-xs">
                Follow
              </button>
            </div>
          </div>
          <nav>
            <ul className="flex text-xs text-gray-400 justify-start flex-wrap mt-5 leading-5">
              <li>
                <a className="p-1" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="p-1" href="#">
                  Help
                </a>
              </li>
              <li>
                <a className="p-1" href="#">
                  Press
                </a>
              </li>
              <li>
                <a className="p-1" href="#">
                  Api
                </a>
              </li>
              <li>
                <a className="p-1" href="#">
                  Jobs
                </a>
              </li>
              <li>
                <a className="p-1" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a className="p-1" href="#">
                  Terms
                </a>
              </li>
              <li>
                <a className="p-1" href="#">
                  Locations
                </a>
              </li>
              <li>
                <a className="p-1" href="#">
                  Top Accounts
                </a>
              </li>
              <li>
                <a className="p-1" href="#">
                  Hashtags
                </a>
              </li>
              <li>
                <a className="p-1" href="#">
                  Language
                </a>
              </li>
            </ul>
          </nav>
          <p className="uppercase mt-4 text-xs text-gray-400">
            &copy; 2021 Instagram for facebook
          </p>
        </div>
      </section>
    </>
  );
};

export { Home };
