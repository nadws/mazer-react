import React, { useEffect } from "react";
import Input from "@/Components/Input";
import { Link, Head } from "@inertiajs/inertia-react";
export default function login() {
    return (
        <>
            <Head>
                <title>Welcome</title>
                <link
                    rel="stylesheet"
                    href="/css/theme/assets/css/main/app.css"
                />
            </Head>
            <div id="app">
                <div id="sidebar" className="active">
                    <div className="sidebar-wrapper active">
                        <div className="sidebar-header position-relative">
                            <div
                                className="
                          d-flex
                          justify-content-between
                          align-items-center
                      "
                            >
                                <div className="logo">
                                    <a href="index.html">
                                        <img
                                            src="/css/theme/assets/images/logo/logo.svg"
                                            alt="Logo"
                                            srcSet
                                        />
                                    </a>
                                </div>
                                <div
                                    className="
                              theme-toggle
                              d-flex
                              gap-2
                              align-items-center
                              mt-2
                          "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        className="iconify iconify--system-uicons"
                                        width={20}
                                        height={20}
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 21 21"
                                    >
                                        <g
                                            fill="none"
                                            fillRule="evenodd"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path
                                                d="M10.5 14.5c2.219 0 4-1.763 4-3.982a4.003 4.003 0 0 0-4-4.018c-2.219 0-4 1.781-4 4c0 2.219 1.781 4 4 4zM4.136 4.136L5.55 5.55m9.9 9.9l1.414 1.414M1.5 10.5h2m14 0h2M4.135 16.863L5.55 15.45m9.899-9.9l1.414-1.415M10.5 19.5v-2m0-14v-2"
                                                opacity=".3"
                                            />
                                            <g transform="translate(-210 -1)">
                                                <path d="M220.5 2.5v2m6.5.5l-1.5 1.5" />
                                                <circle
                                                    cx="220.5"
                                                    cy="11.5"
                                                    r={4}
                                                />
                                                <path d="m214 5l1.5 1.5m5 14v-2m6.5-.5l-1.5-1.5M214 18l1.5-1.5m-4-5h2m14 0h2" />
                                            </g>
                                        </g>
                                    </svg>
                                    <div className="form-check form-switch fs-6">
                                        <input
                                            className="form-check-input me-0"
                                            type="checkbox"
                                            id="toggle-dark"
                                        />
                                        <label className="form-check-label" />
                                    </div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        className="iconify iconify--mdi"
                                        width={20}
                                        height={20}
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="m17.75 4.09l-2.53 1.94l.91 3.06l-2.63-1.81l-2.63 1.81l.91-3.06l-2.53-1.94L12.44 4l1.06-3l1.06 3l3.19.09m3.5 6.91l-1.64 1.25l.59 1.98l-1.7-1.17l-1.7 1.17l.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95l2.06.05m-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85c-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14c.4-.4.82-.76 1.27-1.08c.75-.53 1.93.36 1.85 1.19c-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 0 0 8.02 2.89m-1.64 2.02a12.08 12.08 0 0 1-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82c-2.81 3.14-2.7 7.96.31 10.98c3.02 3.01 7.84 3.12 10.98.31Z"
                                        />
                                    </svg>
                                </div>
                                <div className="sidebar-toggler x">
                                    <a
                                        href="#"
                                        className="sidebar-hide d-xl-none d-block"
                                    >
                                        <i className="bi bi-x bi-middle" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar-menu">
                            <ul className="menu">
                                <li className="sidebar-title">Menu</li>
                                <li className="sidebar-item active">
                                    <Link
                                        href={route("dashboard")}
                                        className="sidebar-link"
                                    >
                                        <i className="bi bi-grid-fill" />
                                        <span>Dashboard</span>
                                    </Link>
                                </li>
                                <li className="sidebar-item ">
                                    <Link
                                        href={route("testing")}
                                        className="sidebar-link"
                                    >
                                        <i className="bi bi-grid-fill" />
                                        <span>Testing</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="main" className="layout-navbar">
                    <header className="mb-3">
                        <nav className="navbar navbar-expand navbar-light navbar-top">
                            <div className="container-fluid">
                                <a href="#" className="burger-btn d-block">
                                    <i className="bi bi-justify fs-3" />
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
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div
                                    className="collapse navbar-collapse"
                                    id="navbarSupportedContent"
                                >
                                    <ul className="navbar-nav ms-auto mb-lg-0">
                                        <li className="nav-item dropdown me-1">
                                            <a
                                                className="
                                          nav-link
                                          active
                                          dropdown-toggle
                                          text-gray-600
                                      "
                                                href="#"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <i
                                                    className="
                                              bi bi-envelope bi-sub
                                              fs-4
                                          "
                                                />
                                            </a>
                                            <ul
                                                className="
                                          dropdown-menu dropdown-menu-end
                                      "
                                                aria-labelledby="dropdownMenuButton"
                                            >
                                                <li>
                                                    <h6 className="dropdown-header">
                                                        Mail
                                                    </h6>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        No new mail
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown me-3">
                                            <a
                                                className="
                                          nav-link
                                          active
                                          dropdown-toggle
                                          text-gray-600
                                      "
                                                href="#"
                                                data-bs-toggle="dropdown"
                                                data-bs-display="static"
                                                aria-expanded="false"
                                            >
                                                <i className="bi bi-bell bi-sub fs-4" />
                                            </a>
                                            <ul
                                                className="
                                          dropdown-menu dropdown-menu-end
                                          notification-dropdown
                                      "
                                                aria-labelledby="dropdownMenuButton"
                                            >
                                                <li className="dropdown-header">
                                                    <h6>Notifications</h6>
                                                </li>
                                                <li
                                                    className="
                                              dropdown-item
                                              notification-item
                                          "
                                                >
                                                    <a
                                                        className="
                                                  d-flex
                                                  align-items-center
                                              "
                                                        href="#"
                                                    >
                                                        <div
                                                            className="
                                                      notification-icon
                                                      bg-primary
                                                  "
                                                        >
                                                            <i
                                                                className="
                                                          bi bi-cart-check
                                                      "
                                                            />
                                                        </div>
                                                        <div
                                                            className="
                                                      notification-text
                                                      ms-4
                                                  "
                                                        >
                                                            <p
                                                                className="
                                                          notification-title
                                                          font-bold
                                                      "
                                                            >
                                                                Successfully
                                                                check out
                                                            </p>
                                                            <p
                                                                className="
                                                          notification-subtitle
                                                          font-thin
                                                          text-sm
                                                      "
                                                            >
                                                                Order ID #256
                                                            </p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li
                                                    className="
                                              dropdown-item
                                              notification-item
                                          "
                                                >
                                                    <a
                                                        className="
                                                  d-flex
                                                  align-items-center
                                              "
                                                        href="#"
                                                    >
                                                        <div
                                                            className="
                                                      notification-icon
                                                      bg-success
                                                  "
                                                        >
                                                            <i
                                                                className="
                                                          bi
                                                          bi-file-earmark-check
                                                      "
                                                            />
                                                        </div>
                                                        <div
                                                            className="
                                                      notification-text
                                                      ms-4
                                                  "
                                                        >
                                                            <p
                                                                className="
                                                          notification-title
                                                          font-bold
                                                      "
                                                            >
                                                                Homework
                                                                submitted
                                                            </p>
                                                            <p
                                                                className="
                                                          notification-subtitle
                                                          font-thin
                                                          text-sm
                                                      "
                                                            >
                                                                Algebra math
                                                                homework
                                                            </p>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <p
                                                        className="
                                                  text-center
                                                  py-2
                                                  mb-0
                                              "
                                                    >
                                                        <a href="#">
                                                            See all notification
                                                        </a>
                                                    </p>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div className="dropdown">
                                        <a
                                            href="#"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <div className="user-menu d-flex">
                                                <div className="user-name text-end me-3">
                                                    <h6 className="mb-0 text-gray-600">
                                                        John Ducky
                                                    </h6>
                                                    <p
                                                        className="
                                                  mb-0
                                                  text-sm text-gray-600
                                              "
                                                    >
                                                        Administrator
                                                    </p>
                                                </div>
                                                <div
                                                    className="
                                              user-img
                                              d-flex
                                              align-items-center
                                          "
                                                >
                                                    <div className="avatar avatar-md">
                                                        <img src="assets/images/faces/1.jpg" />
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <ul
                                            className="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="dropdownMenuButton"
                                            style={{ minWidth: "11rem" }}
                                        >
                                            <li>
                                                <h6 className="dropdown-header">
                                                    Hello, John!
                                                </h6>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    <i
                                                        className="
                                                  icon-mid
                                                  bi bi-person
                                                  me-2
                                              "
                                                    />
                                                    My Profile
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    <i
                                                        className="
                                                  icon-mid
                                                  bi bi-gear
                                                  me-2
                                              "
                                                    />
                                                    Settings
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    <i
                                                        className="
                                                  icon-mid
                                                  bi bi-wallet
                                                  me-2
                                              "
                                                    />
                                                    Wallet
                                                </a>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    <i
                                                        className="
                                                  icon-mid
                                                  bi bi-box-arrow-left
                                                  me-2
                                              "
                                                    />
                                                    Logout
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </header>
                    <div id="main-content">
                        <div className="page-heading">
                            <div className="page-title">
                                <div className="row">
                                    <div
                                        className="
                                  col-12 col-md-6
                                  order-md-1 order-last
                              "
                                    >
                                        <h3>Vertical Layout with Navbar</h3>
                                        <p className="text-subtitle text-muted">
                                            Navbar will appear on the top of the
                                            page.
                                        </p>
                                    </div>
                                    <div
                                        className="
                                  col-12 col-md-6
                                  order-md-2 order-first
                              "
                                    >
                                        <nav
                                            aria-label="breadcrumb"
                                            className="
                                      breadcrumb-header
                                      float-start float-lg-end
                                  "
                                        >
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item">
                                                    <a href="index.html">
                                                        Dashboard
                                                    </a>
                                                </li>
                                                <li
                                                    className="breadcrumb-item active"
                                                    aria-current="page"
                                                >
                                                    Layout Vertical Navbar
                                                </li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <section className="section">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">
                                            Example Content
                                        </h4>
                                    </div>
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Consectetur quas omnis
                                        laudantium tempore exercitationem,
                                        expedita aspernatur sed officia
                                        asperiores unde tempora maxime odio
                                        reprehenderit distinctio incidunt! Vel
                                        aspernatur dicta consequatur!
                                    </div>
                                </div>
                            </section>
                        </div>
                        <footer>
                            <div className="footer clearfix mb-0 text-muted">
                                <div className="float-start">
                                    <p>2021 © Mazer</p>
                                </div>
                                <div className="float-end">
                                    <p>
                                        Crafted with
                                        <span className="text-danger">
                                            <i className="bi bi-heart-fill icon-mid" />
                                        </span>
                                        by
                                        <a href="https://ahmadsaugi.com">
                                            Saugi
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
