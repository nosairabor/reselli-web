import React from 'react'
import Head from 'next/head';

export default function Dashboard() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Spike Free NextJs Admin Template by Wrappixel</title>

        {/* Favicon */}
        <link
          rel="shortcut icon"
          type="image/png"
          href="https://demos.wrappixel.com/premium-admin-templates/bootstrap/spike-bootstrap/package/dist/images/logo/favicon.png"
        />

        {/* Bootstrap */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        />

        {/* Custom Styles */}
        <link href="./style.css" rel="stylesheet" />
      </Head>

      <div id="main-wrapper">
        <header className="bg-white">
          <div className="container">
            <div className="header">
              <nav className="navbar navbar-expand-md navbar-light px-0">
                <a className="navbar-brand d-flex" href="index.html">
                  <img
                    src="https://spike-nextjs-pro-main.vercel.app/images/logos/logo-dark.svg"
                    alt="logo"
                  />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto py-3 py-md-0">
                    <li className="nav-item pe-0 pe-md-3">
                      <a
                        href="https://www.wrappixel.com/templates/spike-next-js-free-admin-template/"
                        className="btn btn-custom btn-outline-primary d-block d-md-inline-block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Free Download
                      </a>
                    </li>
                    <li className="nav-item mt-3 mt-md-0">
                      <a
                        href="https://www.wrappixel.com/templates/spike-nextjs-admin-template/?ref=33"
                        className="btn btn-custom btn-primary d-block d-md-inline-block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Check Pro Version
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>

        <div className="content-wrapper">
          <section className="spacer bg-light">
            <div className="container">
              <div className="row justify-content-md-center">
                {/* Lite Demo */}
                <div className="col-lg-6 col-md-9 d-flex align-items-stretch">
                  <div className="card p-2 me-1">
                    <div className="card-body p-4">
                      <div className="text-center">
                        <h3 className="text-dark font-weight-medium">Free Version</h3>
                      </div>
                      <div className="live-box text-center mt-4">
                        <img
                          className="img-fluid rounded"
                          src="https://www.wrappixel.com/wp-content/uploads/2023/11/spike-nextjs-free.jpg"
                          alt="Free version"
                        />
                      </div>
                      <div className="text-center mt-4">
                        <a
                          className="btn btn-outline-secondary btn-custom mb-2 mb-md-0"
                          href="https://spike-nextjs-free.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Preview
                        </a>
                        <a
                          href="https://www.wrappixel.com/templates/spike-next-js-free-admin-template/"
                          className="btn btn-secondary btn-custom ms-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Free Download
                        </a>
                      </div>

                      {/* Feature Listing */}
                      <div className="row text-muted mt-4">
                        <div className="col-md-6">
                          <ul className="list-unstyled listing">
                            <li className="py-2 d-flex align-items-center">
                              <span className="icon-circle circle-muted me-2"></span>1 Basic Dashboard
                            </li>
                            {/* Continue the list... */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pro Demo */}
                <div className="col-lg-6 col-md-9 mt-0 mt-md-4 mt-lg-0">
                  <div className="card pro-demo p-2 ms-1">
                    <div className="card-body p-4">
                      <div className="text-center">
                        <h3 className="text-primary font-weight-medium">Pro Version</h3>
                      </div>
                      <div className="live-box text-center mt-4">
                        <img
                          className="img-fluid rounded"
                          src="https://www.wrappixel.com/wp-content/uploads/edd/2024/05/spike-nextjs-admin-wpn.jpg"
                          alt="Pro version"
                        />
                      </div>
                      <div className="text-center mt-4">
                        <a
                          className="btn btn-outline-primary btn-custom mb-2 mb-md-0"
                          href="https://spike-nextjs-pro-main.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Preview
                        </a>
                        <a
                          href="https://www.wrappixel.com/templates/spike-nextjs-admin-template/?ref=33"
                          className="btn btn-custom btn-primary ms-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Check Pro Version
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="text-center p-4">
            All Rights Reserved by Spike NextJs Admin. Designed and Developed by{' '}
            <a href="https://www.wrappixel.com" target="_blank" rel="noopener noreferrer">
              wrappixel.com
            </a>
          </footer>
        </div>
      </div>

      {/* Bootstrap JS */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}
