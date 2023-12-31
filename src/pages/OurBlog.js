import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import parkwell from "./parklogo.png";
import { Link } from "react-router-dom";

const OurBlog = () => {
  return (
    <>
      <body class="d-flex flex-column h-100">
        <Header />

        <div class="wrapper">
          <div class="breadcrumb-block">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 col-md-10">
                  <div class="barren-breadcrumb">
                    <nav aria-label="breadcrumb">
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">
                          Our Blog
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="event-dt-block p-80">
            <div class="most-popular-posts">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12 col-md-12">
                    <div class="slide-posts">
                      <div class="row">
                        <div class="col-lg-12 col-md-12">
                          <div class="">
                            <div class="owl-carousel most-posts-slider owl-theme">
                              <div class="item">
                                <div class="main-card">
                                  <div class="blog-block flex-slide">
                                    <div class="blog-img-card left">
                                      <a href="/blog-detail" class="bbig-img">
                                        <img
                                          src="images/blog-imgs/img-1.jpg"
                                          alt=""
                                        />
                                      </a>
                                    </div>
                                    <div class="blog-content right">
                                      <a
                                        href="/blog-detail"
                                        class="blog--title"
                                      >
                                        Organising a Successful Christmas Party
                                        with Ticket Loop
                                      </a>
                                      <p class="mb-4">
                                        Phasellus venenatis posuere nibh, sit
                                        amet blandit lorem pharetra ac.
                                        Phasellus feugiat laoreet laoreet.
                                      </p>
                                      <div class="post-meta">
                                        <span class="post-date me-4">
                                          <i class="fa-regular fa-calendar-days me-2"></i>
                                          5 May, 2022
                                        </span>
                                        <span class="post-read-time">
                                          <i class="fa-regular fa-clock me-2"></i>
                                          10 mins read{" "}
                                        </span>
                                      </div>
                                      <a
                                        href="/blog-detail"
                                        class="main-btn h_50 btn-hover bt_40"
                                      >
                                        View Post
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="item">
                                <div class="main-card">
                                  <div class="blog-block flex-slide">
                                    <div class="blog-img-card left">
                                      <a href="/blog-detail" class="bbig-img">
                                        <img
                                          src="images/blog-imgs/img-12.jpg"
                                          alt=""
                                        />
                                      </a>
                                    </div>
                                    <div class="blog-content right">
                                      <a
                                        href="/blog-detail"
                                        class="blog--title"
                                      >
                                        Step-by-Step Guide to Promote Event on
                                        Social Media
                                      </a>
                                      <p class="mb-4">
                                        Phasellus venenatis posuere nibh, sit
                                        amet blandit lorem pharetra ac.
                                        Phasellus feugiat laoreet laoreet.
                                      </p>
                                      <div class="post-meta">
                                        <span class="post-date me-4">
                                          <i class="fa-regular fa-calendar-days me-2"></i>
                                          5 May, 2022
                                        </span>
                                        <span class="post-read-time">
                                          <i class="fa-regular fa-clock me-2"></i>
                                          10 mins read{" "}
                                        </span>
                                      </div>
                                      <a
                                        href="/blog-detail"
                                        class="main-btn h_50 btn-hover bt_40"
                                      >
                                        View Post
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="item">
                                <div class="main-card">
                                  <div class="blog-block flex-slide">
                                    <div class="blog-img-card left">
                                      <a href="/blog-detail" class="bbig-img">
                                        <img
                                          src="images/blog-imgs/img-3.jpg"
                                          alt=""
                                        />
                                      </a>
                                    </div>
                                    <div class="blog-content right">
                                      <a
                                        href="/blog-detail"
                                        class="blog--title"
                                      >
                                        How to Live Stream Successfully:
                                        Complete Guide for Event Hosts
                                      </a>
                                      <p class="mb-4">
                                        Phasellus venenatis posuere nibh, sit
                                        amet blandit lorem pharetra ac.
                                        Phasellus feugiat laoreet laoreet.
                                      </p>
                                      <div class="post-meta">
                                        <span class="post-date me-4">
                                          <i class="fa-regular fa-calendar-days me-2"></i>
                                          5 May, 2022
                                        </span>
                                        <span class="post-read-time">
                                          <i class="fa-regular fa-clock me-2"></i>
                                          10 mins read{" "}
                                        </span>
                                      </div>
                                      <a
                                        href="/blog-detail"
                                        class="main-btn h_50 btn-hover bt_40"
                                      >
                                        View Post
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="item">
                                <div class="main-card">
                                  <div class="blog-block flex-slide">
                                    <div class="blog-img-card left">
                                      <a href="/blog-detail" class="bbig-img">
                                        <img
                                          src="images/blog-imgs/img-4.jpg"
                                          alt=""
                                        />
                                      </a>
                                    </div>
                                    <div class="blog-content right">
                                      <a
                                        href="/blog-detail"
                                        class="blog--title"
                                      >
                                        Virtual Event Sponsorship Ideas for Your
                                        Next Event
                                      </a>
                                      <p class="mb-4">
                                        Phasellus venenatis posuere nibh, sit
                                        amet blandit lorem pharetra ac.
                                        Phasellus feugiat laoreet laoreet.
                                      </p>
                                      <div class="post-meta">
                                        <span class="post-date me-4">
                                          <i class="fa-regular fa-calendar-days me-2"></i>
                                          5 May, 2022
                                        </span>
                                        <span class="post-read-time">
                                          <i class="fa-regular fa-clock me-2"></i>
                                          10 mins read{" "}
                                        </span>
                                      </div>
                                      <a
                                        href="/blog-detail"
                                        class="main-btn h_50 btn-hover bt_40"
                                      >
                                        View Post
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="latest-posts Bp-top">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12 col-md-12">
                    <div class="main-title checkout-title">
                      <h3>Latest Posts</h3>
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12">
                    <div class="bt_40">
                      <div class="row g-4">
                        <div class="col-xl-3 col-lg-4 col-md-6">
                          <div class="main-card">
                            <div class="blog-thumbnail">
                              <a href="/blog-detail" class="thumbnail-img">
                                <Link to="/blog-detail">
                                  <img
                                    src="images/blog-imgs/img-1.jpg"
                                    alt=""
                                  />
                                </Link>
                              </a>
                            </div>
                            <div class="blog-content">
                              <a href="/blog-detail" class="blog-title fs-16">
                                Organising a Successful Christmas Party with
                                Ticket Loop
                              </a>
                              <div class="post-meta bt_33">
                                <span class="post-date fs-14">
                                  <i class="fa-regular fa-calendar-days me-2"></i>
                                  5 May, 2022
                                </span>
                                <span class="post-read-time fs-14">
                                  <i class="fa-regular fa-clock me-2"></i>10
                                  mins read{" "}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                          <div class="main-card">
                            <div class="blog-thumbnail">
                              <a href="/blog-detail" class="thumbnail-img">
                                <img src="images/blog-imgs/img-2.jpg" alt="" />
                              </a>
                            </div>
                            <div class="blog-content">
                              <a href="/blog-detail" class="blog-title fs-16">
                                How to Live Stream Successfully: Complete Guide
                                for Event Hosts
                              </a>
                              <div class="post-meta bt_33">
                                <span class="post-date fs-14">
                                  <i class="fa-regular fa-calendar-days me-2"></i>
                                  5 May, 2022
                                </span>
                                <span class="post-read-time fs-14">
                                  <i class="fa-regular fa-clock me-2"></i>10
                                  mins read{" "}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                          <div class="main-card">
                            <div class="blog-thumbnail">
                              <a href="/blog-detail" class="thumbnail-img">
                                <img src="images/blog-imgs/img-3.jpg" alt="" />
                              </a>
                            </div>
                            <div class="blog-content">
                              <a href="/blog-detail" class="blog-title fs-16">
                                Virtual Event Sponsorship Ideas for Your Next
                                Event
                              </a>
                              <div class="post-meta bt_33">
                                <span class="post-date fs-14">
                                  <i class="fa-regular fa-calendar-days me-2"></i>
                                  5 May, 2022
                                </span>
                                <span class="post-read-time fs-14">
                                  <i class="fa-regular fa-clock me-2"></i>10
                                  mins read{" "}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                          <div class="main-card">
                            <div class="blog-thumbnail">
                              <a href="/blog-detail" class="thumbnail-img">
                                <img src="images/blog-imgs/img-4.jpg" alt="" />
                              </a>
                            </div>
                            <div class="blog-content">
                              <a href="/blog-detail" class="blog-title fs-16">
                                13 Awesome Virtual Event Ideas for Your Next
                                Online Event
                              </a>
                              <div class="post-meta bt_33">
                                <span class="post-date fs-14">
                                  <i class="fa-regular fa-calendar-days me-2"></i>
                                  5 May, 2022
                                </span>
                                <span class="post-read-time fs-14">
                                  <i class="fa-regular fa-clock me-2"></i>10
                                  mins read{" "}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                          <div class="main-card">
                            <div class="blog-thumbnail">
                              <a href="/blog-detail" class="thumbnail-img">
                                <img src="images/blog-imgs/img-5.jpg" alt="" />
                              </a>
                            </div>
                            <div class="blog-content">
                              <a href="/blog-detail" class="blog-title fs-16">
                                How to organise a virtual event successfully
                                with Ticket Loop
                              </a>
                              <div class="post-meta bt_33">
                                <span class="post-date fs-14">
                                  <i class="fa-regular fa-calendar-days me-2"></i>
                                  5 May, 2022
                                </span>
                                <span class="post-read-time fs-14">
                                  <i class="fa-regular fa-clock me-2"></i>10
                                  mins read{" "}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                          <div class="main-card">
                            <div class="blog-thumbnail">
                              <a href="/blog-detail" class="thumbnail-img">
                                <img src="images/blog-imgs/img-6.jpg" alt="" />
                              </a>
                            </div>
                            <div class="blog-content">
                              <a href="/blog-detail" class="blog-title fs-16">
                                Make Your Next Webinar Interactive with Ticket
                                Loop
                              </a>
                              <div class="post-meta bt_33">
                                <span class="post-date fs-14">
                                  <i class="fa-regular fa-calendar-days me-2"></i>
                                  5 May, 2022
                                </span>
                                <span class="post-read-time fs-14">
                                  <i class="fa-regular fa-clock me-2"></i>10
                                  mins read{" "}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                          <div class="main-card">
                            <div class="blog-thumbnail">
                              <a href="/blog-detail" class="thumbnail-img">
                                <img src="images/blog-imgs/img-7.jpg" alt="" />
                              </a>
                            </div>
                            <div class="blog-content">
                              <a href="/blog-detail" class="blog-title fs-16">
                                Monetise Your Online Events with Ticket Loop and
                                Earn Money
                              </a>
                              <div class="post-meta bt_33">
                                <span class="post-date fs-14">
                                  <i class="fa-regular fa-calendar-days me-2"></i>
                                  5 May, 2022
                                </span>
                                <span class="post-read-time fs-14">
                                  <i class="fa-regular fa-clock me-2"></i>10
                                  mins read{" "}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                          <div class="main-card">
                            <div class="blog-thumbnail">
                              <a href="/blog-detail" class="thumbnail-img">
                                <img src="images/blog-imgs/img-8.jpg" alt="" />
                              </a>
                            </div>
                            <div class="blog-content">
                              <a href="/blog-detail" class="blog-title fs-16">
                                The Organiser’s Guide to Hosting a Successful
                                Virtual Event
                              </a>
                              <div class="post-meta bt_33">
                                <span class="post-date fs-14">
                                  <i class="fa-regular fa-calendar-days me-2"></i>
                                  5 May, 2022
                                </span>
                                <span class="post-read-time fs-14">
                                  <i class="fa-regular fa-clock me-2"></i>10
                                  mins read{" "}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                          <div class="main-card">
                            <div class="blog-thumbnail">
                              <a href="/blog-detail" class="thumbnail-img">
                                <img src="images/blog-imgs/img-9.jpg" alt="" />
                              </a>
                            </div>
                            <div class="blog-content">
                              <a href="/blog-detail" class="blog-title fs-16">
                                4 Ways How Technology Can Simplify Event
                                Ticketing
                              </a>
                              <div class="post-meta bt_33">
                                <span class="post-date fs-14">
                                  <i class="fa-regular fa-calendar-days me-2"></i>
                                  5 May, 2022
                                </span>
                                <span class="post-read-time fs-14">
                                  <i class="fa-regular fa-clock me-2"></i>10
                                  mins read{" "}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                          <div class="main-card">
                            <div class="blog-thumbnail">
                              <a href="/blog-detail" class="thumbnail-img">
                                <img src="images/blog-imgs/img-10.jpg" alt="" />
                              </a>
                            </div>
                            <div class="blog-content">
                              <a href="/blog-detail" class="blog-title fs-16">
                                23 Creative Event Marketing Ideas to Boost Your
                                Ticket Sales
                              </a>
                              <div class="post-meta bt_33">
                                <span class="post-date fs-14">
                                  <i class="fa-regular fa-calendar-days me-2"></i>
                                  5 May, 2022
                                </span>
                                <span class="post-read-time fs-14">
                                  <i class="fa-regular fa-clock me-2"></i>10
                                  mins read{" "}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                          <div class="main-card">
                            <div class="blog-thumbnail">
                              <a href="/blog-detail" class="thumbnail-img">
                                <img src="images/blog-imgs/img-11.jpg" alt="" />
                              </a>
                            </div>
                            <div class="blog-content">
                              <a href="/blog-detail" class="blog-title fs-16">
                                New Event Ticketing Features: Ticket Loop (2022)
                              </a>
                              <div class="post-meta bt_33">
                                <span class="post-date fs-14">
                                  <i class="fa-regular fa-calendar-days me-2"></i>
                                  5 May, 2022
                                </span>
                                <span class="post-read-time fs-14">
                                  <i class="fa-regular fa-clock me-2"></i>10
                                  mins read{" "}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                          <div class="main-card">
                            <div class="blog-thumbnail">
                              <a href="/blog-detail" class="thumbnail-img">
                                <img src="images/blog-imgs/img-12.jpg" alt="" />
                              </a>
                            </div>
                            <div class="blog-content">
                              <a href="/blog-detail" class="blog-title fs-16">
                                Step-by-Step Guide to Promote Event on Social
                                Media
                              </a>
                              <div class="post-meta bt_33">
                                <span class="post-date fs-14">
                                  <i class="fa-regular fa-calendar-days me-2"></i>
                                  5 May, 2022
                                </span>
                                <span class="post-read-time fs-14">
                                  <i class="fa-regular fa-clock me-2"></i>10
                                  mins read{" "}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-12 col-md-12">
                          <div class="browse-btn mt-4">
                            <a href="#" class="main-btn btn-hover ">
                              See More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </body>
    </>
  );
};

export default OurBlog;
