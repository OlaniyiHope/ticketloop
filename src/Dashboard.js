import React from "react";
import parkwell from "./pages/new.png";
import Sidebar from "./pages/Sidebar";
import DashboardHeader from "./pages/DashboardHeader";
const Dashboard = () => {
  return (
    <>
      <body class="d-flex flex-column h-100">
        <div
          class="modal fade"
          id="addorganisationModal"
          tabindex="-1"
          aria-labelledby="addorganisationLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="addorganisationLabel">
                  Organisation details
                </h5>
                <button
                  type="button"
                  class="close-model-btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i class="uil uil-multiply"></i>
                </button>
              </div>
              <div class="modal-body">
                <div class="model-content main-form">
                  <div class="row">
                    <div class="col-lg-12 col-md-12">
                      <div class="form-group text-center mt-4">
                        <label class="form-label">Avatar*</label>
                        <span class="org_design_button btn-file">
                          <span>
                            <i class="fa-solid fa-camera"></i>
                          </span>
                          <input
                            type="file"
                            id="org_avatar"
                            accept="image/*"
                            name="Organisation_avatar"
                          />
                        </span>
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                      <div class="form-group mt-4">
                        <label class="form-label">Name*</label>
                        <input
                          class="form-control h_40"
                          type="text"
                          placeholder=""
                          value=""
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                      <div class="form-group mt-4">
                        <label class="form-label">Profile Link*</label>
                        <input
                          class="form-control h_40"
                          type="text"
                          placeholder=""
                          value="https://www.barren.com/b/organiser/"
                          disabled
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                      <div class="form-group mt-4">
                        <label class="form-label">About*</label>
                        <textarea class="form-textarea" placeholder="">
                          About
                        </textarea>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="form-group mt-4">
                        <label class="form-label">Email*</label>
                        <input
                          class="form-control h_40"
                          type="text"
                          placeholder=""
                          value=""
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="form-group mt-4">
                        <label class="form-label">Phone*</label>
                        <input
                          class="form-control h_40"
                          type="text"
                          placeholder=""
                          value=""
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="form-group mt-4">
                        <label class="form-label">Website*</label>
                        <input
                          class="form-control h_40"
                          type="text"
                          placeholder=""
                          value=""
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="form-group mt-4">
                        <label class="form-label">Facebook*</label>
                        <input
                          class="form-control h_40"
                          type="text"
                          placeholder=""
                          value=""
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="form-group mt-4">
                        <label class="form-label">Instagram*</label>
                        <input
                          class="form-control h_40"
                          type="text"
                          placeholder=""
                          value=""
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="form-group mt-4">
                        <label class="form-label">Twitter*</label>
                        <input
                          class="form-control h_40"
                          type="text"
                          placeholder=""
                          value=""
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="form-group mt-4">
                        <label class="form-label">LinkedIn*</label>
                        <input
                          class="form-control h_40"
                          type="text"
                          placeholder=""
                          value=""
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="form-group mt-4">
                        <label class="form-label">Youtube*</label>
                        <input
                          class="form-control h_40"
                          type="text"
                          placeholder=""
                          value=""
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                      <h4 class="address-title">Address</h4>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="form-group mt-4">
                        <label class="form-label">Address 1*</label>
                        <input
                          class="form-control h_40"
                          type="text"
                          placeholder=""
                          value=""
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="form-group mt-4">
                        <label class="form-label">Address 2*</label>
                        <input
                          class="form-control h_40"
                          type="text"
                          placeholder=""
                          value=""
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="form-group main-form mt-4">
                        <label class="form-label">Country*</label>
                        <select
                          class="selectpicker"
                          data-size="5"
                          title="Nothing selected"
                          data-live-search="true"
                        >
                          <option value="Algeria">Algeria</option>
                          <option value="Argentina">Argentina</option>
                          <option value="Australia">Australia</option>
                          <option value="Austria">Austria (Österreich)</option>
                          <option value="Belgium">Belgium (België)</option>
                          <option value="Bolivia">Bolivia</option>
                          <option value="Brazil">Brazil</option>
                          <option value="Canada">Canada</option>
                          <option value="Chile">Chile</option>
                          <option value="Colombia">Colombia</option>
                          <option value="Costa Rica">Costa Rica</option>
                          <option value="Cyprus">Cyprus</option>
                          <option value="Czech Republic">Czech Republic</option>
                          <option value="Denmark">Denmark</option>
                          <option value="Dominican Republic">
                            Dominican Republic
                          </option>
                          <option value="Estonia">Estonia</option>
                          <option value="Finland">Finland</option>
                          <option value="France">France</option>
                          <option value="Germany">Germany</option>
                          <option value="Greece">Greece</option>
                          <option value="Hong Kong">Hong Kong</option>
                          <option value="Iceland">Iceland</option>
                          <option value="India">India</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="Ireland">Ireland</option>
                          <option value="Israel">Israel</option>
                          <option value="Italy">Italy</option>
                          <option value="Japan">Japan</option>
                          <option value="Latvia">Latvia</option>
                          <option value="Lithuania">Lithuania</option>
                          <option value="Luxembourg">Luxembourg</option>
                          <option value="Malaysia">Malaysia</option>
                          <option value="Mexico">Mexico</option>
                          <option value="Nepal">Nepal</option>
                          <option value="Netherlands">Netherlands</option>
                          <option value="New Zealand">New Zealand</option>
                          <option value="Norway">Norway</option>
                          <option value="Paraguay">Paraguay</option>
                          <option value="Peru">Peru</option>
                          <option value="Philippines">Philippines</option>
                          <option value="Poland">Poland</option>
                          <option value="Portugal">Portugal</option>
                          <option value="Singapore">Singapore</option>
                          <option value="Slovakia">Slovakia</option>
                          <option value="Slovenia">Slovenia</option>
                          <option value="South Africa">South Africa</option>
                          <option value="South Korea">South Korea</option>
                          <option value="Spain">Spain</option>
                          <option value="Sweden">Sweden</option>
                          <option value="Switzerland">Switzerland</option>
                          <option value="Tanzania">Tanzania</option>
                          <option value="Thailand">Thailand</option>
                          <option value="Turkey">Turkey</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="United States">United States</option>
                          <option value="Vietnam">Vietnam</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="form-group mt-4">
                        <label class="form-label">State*</label>
                        <input
                          class="form-control h_40"
                          type="text"
                          placeholder=""
                          value=""
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="form-group mt-4">
                        <label class="form-label">City/Suburb*</label>
                        <input
                          class="form-control h_40"
                          type="text"
                          placeholder=""
                          value=""
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="form-group mt-4">
                        <label class="form-label">Zip/Post Code*</label>
                        <input
                          class="form-control h_40"
                          type="text"
                          placeholder=""
                          value=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="co-main-btn min-width btn-hover h_40"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" class="main-btn min-width btn-hover h_40">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
        <DashboardHeader />
        <Sidebar />

        <div class="wrapper wrapper-body">
          <div class="dashboard-body">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-12">
                  <div class="d-main-title">
                    <h3>
                      <i class="fa-solid fa-gauge me-3"></i>Dashboard
                    </h3>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="main-card add-organisation-card p-4 mt-5">
                    <div class="ocard-left">
                      <div class="ocard-avatar">
                        <img src="images/profile-imgs/img-13.jpg" alt="" />
                      </div>
                      <div class="ocard-name">
                        <h4>John Doe</h4>
                        <span>My Organisation</span>
                      </div>
                    </div>
                    <div class="ocard-right">
                      <button
                        class="pe-4 ps-4 co-main-btn min-width"
                        data-bs-toggle="modal"
                        data-bs-target="#addorganisationModal"
                      >
                        <i class="fa-solid fa-plus"></i>Add Organisation
                      </button>
                    </div>
                  </div>
                  <div class="main-card mt-4">
                    <div class="dashboard-wrap-content">
                      <div class="d-flex flex-wrap justify-content-between align-items-center p-4">
                        <div class="dashboard-date-wrap d-flex flex-wrap justify-content-between align-items-center">
                          <div class="dashboard-date-arrows">
                            <a href="#" class="before_date">
                              <i class="fa-solid fa-angle-left"></i>
                            </a>
                            <a href="#" class="after_date disabled">
                              <i class="fa-solid fa-angle-right"></i>
                            </a>
                          </div>
                          <h5 class="dashboard-select-date">
                            <span>1st April, 2022</span>-
                            <span>30th April, 2022</span>
                          </h5>
                        </div>
                        <div class="rs">
                          <div class="dropdown dropdown-text event-list-dropdown">
                            <button
                              class="dropdown-toggle event-list-dropdown"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <span>Selected Events (1)</span>
                            </button>
                            <ul class="dropdown-menu">
                              <li>
                                <a class="dropdown-item" href="#">
                                  1
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="dashboard-report-content">
                        <div class="row">
                          <div class="col-xl-3 col-lg-6 col-md-6">
                            <div class="dashboard-report-card purple">
                              <div class="card-content">
                                <div class="card-content">
                                  <span class="card-title fs-6">
                                    Revenue (AUD)
                                  </span>
                                  <span class="card-sub-title fs-3">
                                    $550.00
                                  </span>
                                  <div class="d-flex align-items-center">
                                    <span>
                                      <i class="fa-solid fa-arrow-trend-up"></i>
                                    </span>
                                    <span class="text-Light font-12 ms-2 me-2">
                                      0.00%
                                    </span>
                                    <span class="font-12 color-body text-nowrap">
                                      From Previous Period
                                    </span>
                                  </div>
                                </div>
                                <div class="card-media">
                                  <i class="fa-solid fa-money-bill"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-xl-3 col-lg-6 col-md-6">
                            <div class="dashboard-report-card red">
                              <div class="card-content">
                                <div class="card-content">
                                  <span class="card-title fs-6">Orders</span>
                                  <span class="card-sub-title fs-3">2</span>
                                  <div class="d-flex align-items-center">
                                    <span>
                                      <i class="fa-solid fa-arrow-trend-up"></i>
                                    </span>
                                    <span class="text-Light font-12 ms-2 me-2">
                                      0.00%
                                    </span>
                                    <span class="font-12 color-body text-nowrap">
                                      From Previous Period
                                    </span>
                                  </div>
                                </div>
                                <div class="card-media">
                                  <i class="fa-solid fa-box"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-xl-3 col-lg-6 col-md-6">
                            <div class="dashboard-report-card info">
                              <div class="card-content">
                                <div class="card-content">
                                  <span class="card-title fs-6">
                                    Page Views
                                  </span>
                                  <span class="card-sub-title fs-3">30</span>
                                  <div class="d-flex align-items-center">
                                    <span>
                                      <i class="fa-solid fa-arrow-trend-up"></i>
                                    </span>
                                    <span class="text-Light font-12 ms-2 me-2">
                                      0.00%
                                    </span>
                                    <span class="font-12 color-body text-nowrap">
                                      From Previous Period
                                    </span>
                                  </div>
                                </div>
                                <div class="card-media">
                                  <i class="fa-solid fa-eye"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-xl-3 col-lg-6 col-md-6">
                            <div class="dashboard-report-card success">
                              <div class="card-content">
                                <div class="card-content">
                                  <span class="card-title fs-6">
                                    Ticket Sales
                                  </span>
                                  <span class="card-sub-title fs-3">3</span>
                                  <div class="d-flex align-items-center">
                                    <span>
                                      <i class="fa-solid fa-arrow-trend-up"></i>
                                    </span>
                                    <span class="text-Light font-12 ms-2 me-2">
                                      0.00%
                                    </span>
                                    <span class="font-12 color-body text-nowrap">
                                      From Previous Period
                                    </span>
                                  </div>
                                </div>
                                <div class="card-media">
                                  <i class="fa-solid fa-ticket"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="main-card mt-4">
                    <div class="d-flex flex-wrap justify-content-between align-items-center border_bottom p-4">
                      <div class="dashboard-date-wrap d-flex flex-wrap justify-content-between align-items-center">
                        <div class="select-graphic-category">
                          <div class="form-group main-form mb-2">
                            <select class="selectpicker" data-width="150px">
                              <option value="revenue">Revenue</option>
                              <option value="orders">Orders</option>
                              <option value="pageviews">Page Views</option>
                              <option value="ticketsales">Ticket Sales</option>
                            </select>
                          </div>
                          <small class="mt-4">
                            See the graphical representation below
                          </small>
                        </div>
                      </div>
                      <div class="rs">
                        <div
                          class="btn-group"
                          role="group"
                          aria-label="Basic radio toggle button group"
                        >
                          <input
                            type="radio"
                            class="btn-check"
                            name="btnradio"
                            id="btnradio1"
                          />
                          <label
                            class="btn btn-outline-primary"
                            for="btnradio1"
                          >
                            Monthly
                          </label>
                          <input
                            type="radio"
                            class="btn-check"
                            name="btnradio"
                            id="btnradio2"
                            checked
                          />
                          <label
                            class="btn btn-outline-primary"
                            for="btnradio2"
                          >
                            Weekly
                          </label>
                          <input
                            type="radio"
                            class="btn-check"
                            name="btnradio"
                            id="btnradio3"
                          />
                          <label
                            class="btn btn-outline-primary"
                            for="btnradio3"
                          >
                            Dailty
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="item-analytics-content p-4 ps-1 pb-2">
                      <div id="views-graphic"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Dashboard;
