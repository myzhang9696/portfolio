import { Fragment, useEffect, useState } from "react";

const Nav = ({ close, trigger }) => {
  const [toggle_, setToggle_] = useState("");
  useEffect(() => {
    !trigger && setToggle_("");
    setTimeout(() => {
      trigger ? setToggle_("ready") : setToggle_("");
    }, 2000);
  }, [trigger]);

  return (
    <Fragment>
      <a href="#" className="resumo_fn_nav_overlay" onClick={() => close()} />
      <div className="resumo_fn_navigation">
        <a href="#" className="closer" onClick={() => close()} />
        {/* Navigation Content */}
        <div className="nav_in">
          <nav id="nav">
            <h3 className="label">Menu</h3>
            <ul>
              <li style={{ transitionDelay: !trigger ? "0ms" : "700ms" }}>
                <a href="#home" onClick={() => close()}>
                  Home
                </a>
              </li>
              <li style={{ transitionDelay: !trigger ? "0ms" : "900ms" }}>
                <a onClick={() => close()} href="#about">
                  About
                </a>
              </li>
              <li style={{ transitionDelay: !trigger ? "0ms" : "1100ms" }}>
                <a onClick={() => close()} href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li style={{ transitionDelay: !trigger ? "0ms" : "1300ms" }}>
                <a onClick={() => close()} href="#services">
                  Services
                </a>
              </li>
              <li style={{ transitionDelay: !trigger ? "0ms" : "1500ms" }}>
                <a onClick={() => close()} href="#customers">
                  Customers
                </a>
              </li>
              <li style={{ transitionDelay: !trigger ? "0ms" : "1700ms" }}>
                <a onClick={() => close()} href="#news">
                  News &amp; Tips
                </a>
              </li>
              <li style={{ transitionDelay: !trigger ? "0ms" : "1300ms" }}>
                <a onClick={() => close()} href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className={`nav_footer ${toggle_}`}>
            <div className="social">
              <ul>
                <li>
                  <a href="#" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="681pt"
                      viewBox="-21 -81 681.33464 681"
                      width="681pt"
                      className="fn__svg replaced-svg"
                    >
                      <path d="m200.964844 515.292969c241.050781 0 372.871094-199.703125 372.871094-372.871094 0-5.671875-.117188-11.320313-.371094-16.9375 25.585937-18.5 47.824218-41.585937 65.371094-67.863281-23.480469 10.441406-48.753907 17.460937-75.257813 20.636718 27.054687-16.230468 47.828125-41.894531 57.625-72.488281-25.320313 15.011719-53.363281 25.917969-83.214844 31.808594-23.914062-25.472656-57.964843-41.402344-95.664062-41.402344-72.367188 0-131.058594 58.6875-131.058594 131.03125 0 10.289063 1.152344 20.289063 3.398437 29.882813-108.917968-5.480469-205.503906-57.625-270.132812-136.921875-11.25 19.363281-17.742188 41.863281-17.742188 65.871093 0 45.460938 23.136719 85.605469 58.316407 109.082032-21.5-.660156-41.695313-6.5625-59.351563-16.386719-.019531.550781-.019531 1.085937-.019531 1.671875 0 63.46875 45.171875 116.460938 105.144531 128.46875-11.015625 2.996094-22.605468 4.609375-34.558594 4.609375-8.429687 0-16.648437-.828125-24.632812-2.363281 16.683594 52.070312 65.066406 89.960937 122.425781 91.023437-44.855469 35.15625-101.359375 56.097657-162.769531 56.097657-10.5625 0-21.003906-.605469-31.2617188-1.816407 57.9999998 37.175781 126.8710938 58.871094 200.8867188 58.871094" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Bold"
                      enableBackground="new 0 0 24 24"
                      height={512}
                      viewBox="0 0 24 24"
                      width={512}
                      className="fn__svg replaced-svg"
                    >
                      <path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z" />
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="#" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      id="Layer_1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 512 512"
                      style={{ enableBackground: "new 0 0 512 512" }}
                      xmlSpace="preserve"
                      className="fn__svg replaced-svg"
                    >
                      <path d="M373.659,0H138.341C62.06,0,0,62.06,0,138.341v235.318C0,449.94,62.06,512,138.341,512h235.318    C449.94,512,512,449.94,512,373.659V138.341C512,62.06,449.94,0,373.659,0z M470.636,373.659    c0,53.473-43.503,96.977-96.977,96.977H138.341c-53.473,0-96.977-43.503-96.977-96.977V138.341    c0-53.473,43.503-96.977,96.977-96.977h235.318c53.473,0,96.977,43.503,96.977,96.977V373.659z" />
                      <path d="M370.586,238.141c-3.64-24.547-14.839-46.795-32.386-64.342c-17.547-17.546-39.795-28.746-64.341-32.385    c-11.176-1.657-22.507-1.657-33.682,0c-30.336,4.499-57.103,20.541-75.372,45.172c-18.269,24.631-25.854,54.903-21.355,85.237    c4.499,30.335,20.541,57.102,45.172,75.372c19.996,14.831,43.706,22.619,68.153,22.619c5.667,0,11.375-0.418,17.083-1.265    c30.336-4.499,57.103-20.541,75.372-45.172C367.5,298.747,375.085,268.476,370.586,238.141z M267.791,327.632    c-19.405,2.882-38.77-1.973-54.527-13.66c-15.757-11.687-26.019-28.811-28.896-48.216c-2.878-19.405,1.973-38.77,13.66-54.527    c11.688-15.757,28.811-26.019,48.217-28.897c3.574-0.53,7.173-0.795,10.772-0.795s7.199,0.265,10.773,0.796    c32.231,4.779,57.098,29.645,61.878,61.877C335.608,284.268,307.851,321.692,267.791,327.632z" />
                      <path d="M400.049,111.951c-3.852-3.851-9.183-6.058-14.625-6.058c-5.442,0-10.773,2.206-14.625,6.058    c-3.851,3.852-6.058,9.174-6.058,14.625c0,5.451,2.207,10.773,6.058,14.625c3.852,3.851,9.183,6.058,14.625,6.058    c5.442,0,10.773-2.206,14.625-6.058c3.851-3.852,6.058-9.183,6.058-14.625C406.107,121.133,403.9,115.802,400.049,111.951z" />
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="#" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      width="579.148px"
                      height="579.148px"
                      viewBox="0 0 579.148 579.148"
                      style={{ enableBackground: "new 0 0 579.148 579.148" }}
                      xmlSpace="preserve"
                      className="fn__svg replaced-svg"
                    >
                      <g>
                        <g>
                          <path d="M434.924,38.847C390.561,12.954,342.107,0.01,289.574,0.01c-52.54,0-100.992,12.944-145.356,38.837    C99.854,64.741,64.725,99.87,38.837,144.228C12.944,188.597,0,237.049,0,289.584c0,58.568,15.955,111.732,47.883,159.486    c31.922,47.768,73.771,83.08,125.558,105.949c-1.01-26.896,0.625-49.137,4.902-66.732l37.326-157.607    c-6.285-12.314-9.425-27.645-9.425-45.999c0-21.365,5.404-39.217,16.212-53.538c10.802-14.333,24.003-21.5,39.59-21.5    c12.564,0,22.246,4.143,29.034,12.448c6.787,8.292,10.184,18.727,10.184,31.292c0,7.797-1.451,17.289-4.334,28.47    c-2.895,11.187-6.665,24.13-11.31,38.837c-4.651,14.701-7.98,26.451-9.994,35.252c-3.525,15.33-0.63,28.463,8.672,39.4    c9.295,10.936,21.616,16.4,36.952,16.4c26.898,0,48.955-14.951,66.176-44.865c17.217-29.914,25.826-66.236,25.826-108.973    c0-32.925-10.617-59.701-31.859-80.312c-21.242-20.606-50.846-30.918-88.795-30.918c-42.486,0-76.862,13.642-103.123,40.906    c-26.267,27.277-39.401,59.896-39.401,97.84c0,22.625,6.414,41.609,19.229,56.941c4.272,5.029,5.655,10.428,4.149,16.205    c-0.508,1.512-1.511,5.281-3.017,11.309c-1.505,6.029-2.515,9.934-3.017,11.689c-2.014,8.049-6.787,10.564-14.333,7.541    c-19.357-8.043-34.064-21.99-44.113-41.85c-10.055-19.854-15.08-42.852-15.08-68.996c0-16.842,2.699-33.685,8.103-50.527    c5.404-16.842,13.819-33.115,25.264-48.832c11.432-15.698,25.135-29.596,41.102-41.659c15.961-12.069,35.38-21.738,58.256-29.04    c22.871-7.283,47.51-10.93,73.904-10.93c35.693,0,67.744,7.919,96.146,23.751c28.402,15.839,50.086,36.329,65.043,61.463    c14.951,25.135,22.436,52.026,22.436,80.692c0,37.705-6.541,71.641-19.607,101.807c-13.072,30.166-31.549,53.855-55.43,71.072    c-23.887,17.215-51.035,25.826-81.445,25.826c-15.336,0-29.664-3.58-42.986-10.748c-13.33-7.166-22.503-15.648-27.528-25.453    c-11.31,44.486-18.097,71.018-20.361,79.555c-4.78,17.852-14.584,38.457-29.413,61.836c26.897,8.043,54.296,12.062,82.198,12.062    c52.534,0,100.987-12.943,145.35-38.83c44.363-25.895,79.492-61.023,105.387-105.393c25.887-44.365,38.838-92.811,38.838-145.352    c0-52.54-12.951-100.985-38.838-145.355C514.422,99.87,479.287,64.741,434.924,38.847z" />
                        </g>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 511.958 511.958"
                      style={{ enableBackground: "new 0 0 511.958 511.958" }}
                      xmlSpace="preserve"
                      className="fn__svg replaced-svg"
                    >
                      <g>
                        <g>
                          <g>
                            <path d="M210.624,240.619c10.624-5.344,18.656-11.296,24.16-17.728c9.792-11.584,14.624-26.944,14.624-45.984     c0-18.528-4.832-34.368-14.496-47.648c-16.128-21.632-43.424-32.704-82.016-33.28H0v312.096h142.56     c16.064,0,30.944-1.376,44.704-4.192c13.76-2.848,25.664-8.064,35.744-15.68c8.96-6.624,16.448-14.848,22.4-24.544     c9.408-14.656,14.112-31.264,14.112-49.76c0-17.92-4.128-33.184-12.32-45.728C238.912,255.627,226.752,246.443,210.624,240.619z      M63.072,150.187h68.864c15.136,0,27.616,1.632,37.408,4.864c11.328,4.704,16.992,14.272,16.992,28.864     c0,13.088-4.32,22.24-12.864,27.392c-8.608,5.152-19.776,7.744-33.472,7.744H63.072V150.187z M171.968,348.427     c-7.616,3.68-18.336,5.504-32.064,5.504H63.072v-83.232h77.888c13.568,0.096,24.128,1.888,31.68,5.248     c13.44,6.08,20.128,17.216,20.128,33.504C192.768,328.651,185.856,341.579,171.968,348.427z" />
                            <rect
                              x="327.168"
                              y="110.539"
                              width="135.584"
                              height="38.848"
                            />
                            <path d="M509.856,263.851c-2.816-18.08-9.024-33.984-18.688-47.712c-10.592-15.552-24.032-26.944-40.384-34.144     c-16.288-7.232-34.624-10.848-55.04-10.816c-34.272,0-62.112,10.72-83.648,32c-21.472,21.344-32.224,52.032-32.224,92.032     c0,42.656,11.872,73.472,35.744,92.384c23.776,18.944,51.232,28.384,82.4,28.384c37.728,0,67.072-11.232,88.032-33.632     c13.408-14.144,20.992-28.064,22.656-41.728H446.24c-3.616,6.752-7.808,12.032-12.608,15.872     c-8.704,7.04-20.032,10.56-33.92,10.56c-13.216,0-24.416-2.912-33.76-8.704c-15.424-9.28-23.488-25.536-24.512-48.672h170.464     C512.16,289.739,511.52,274.411,509.856,263.851z M342.976,269.835c2.24-15.008,7.68-26.912,16.32-35.712     c8.64-8.768,20.864-13.184,36.512-13.216c14.432,0,26.496,4.128,36.32,12.416c9.696,8.352,15.168,20.48,16.288,36.512H342.976z" />
                          </g>
                        </g>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="copyright">
              {" "}
              Developed by &nbsp;
              <a
                href="https://themeforest.net/user/trendycoder"
                target="_blank"
                rel="noreferrer"
              >
                TrendyCoder
              </a>
            </div>
          </div>
        </div>

        {/* /Navigation Content */}
      </div>
    </Fragment>
  );
};

export default Nav;
