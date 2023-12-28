import React from "react";
import Footer from "./Footer";
import parkwell from "./new.png";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";
const Team = () => {
  return (
    <>
      <body class="d-flex flex-column h-100">
        <div
          class="modal fade"
          id="inviteTeamModal"
          tabindex="-1"
          aria-labelledby="inviteTeamModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="inviteTeamModalLabel">
                  Invite a Team Member
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
                  <div class="form-group mt-30">
                    <label class="form-label">
                      Which team members do you wish to invite?*
                    </label>
                    <input
                      class="form-control h_40"
                      type="text"
                      placeholder="Enter email"
                      value=""
                    />
                  </div>
                  <div class="form-group mt-30">
                    <label class="form-label">
                      What role do you wish to assign?*
                    </label>
                    <select class="selectpicker" title="Select Role">
                      <option value="1">Account owner</option>
                      <option value="2">Basic access</option>
                      <option value="3">Finance</option>
                      <option value="4">Power user</option>
                      <option value="5">Producer access</option>
                    </select>
                  </div>
                  <div class="form-group mt-30">
                    <div class="d-flex align-items-start">
                      <label class="btn-switch m-0 me-3">
                        <input
                          type="checkbox"
                          class=""
                          id="bird-discount"
                          value=""
                        />
                        <span class="checkbox-slider"></span>
                      </label>
                      <div class="d-flex flex-column">
                        <label class="color-black fw-bold mb-0">
                          Send system emails to this team member
                        </label>
                        <p class="mt-2 fs-14 d-block mb-0">
                          System emails provide information about events
                          created, as well as updates to the system.
                        </p>
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
                  Invite
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
                      <i class="fa-solid fa-user-group me-3"></i>Team Members
                    </h3>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="conversion-setup">
                    <div class="main-card mt-5">
                      <div class="dashboard-wrap-content p-4">
                        <div class="d-md-flex flex-wrap align-items-center">
                          <div
                            class="nav custom2-tabs btn-group"
                            role="tablist"
                          >
                            <button
                              class="tab-link ms-0 active"
                              data-bs-toggle="tab"
                              data-bs-target="#overview-tab"
                              type="button"
                              role="tab"
                              aria-controls="overview-tab"
                              aria-selected="true"
                            >
                              Overview
                            </button>
                            <button
                              class="tab-link"
                              data-bs-toggle="tab"
                              data-bs-target="#role-tab"
                              type="button"
                              role="tab"
                              aria-controls="role-tab"
                              aria-selected="false"
                            >
                              Role
                            </button>
                          </div>
                          <div class="rs ms-auto mt_r4">
                            <button
                              class="main-btn btn-hover h_40 w-100"
                              data-bs-toggle="modal"
                              data-bs-target="#inviteTeamModal"
                            >
                              Invite a Team Member
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-content">
                      <div
                        class="tab-pane fade active show"
                        id="overview-tab"
                        role="tabpanel"
                      >
                        <div class="table-card mt-4">
                          <div class="main-table">
                            <div class="table-responsive">
                              <table class="table">
                                <thead class="thead-dark">
                                  <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Last Login</th>
                                    <th scope="col">2FA Enable</th>
                                    <th scope="col">Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>John Doe</td>
                                    <td>johndoe@example.com</td>
                                    <td>Account Owner</td>
                                    <td>20 May 22, 10.27 AM</td>
                                    <td>No</td>
                                    <td>
                                      <span class="action-btn disabled">
                                        <i class="fa-solid fa-lock"></i>
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Rock Smith</td>
                                    <td>rocksmith@example.com</td>
                                    <td>Basic access</td>
                                    <td>20 May 22, 11.15 AM</td>
                                    <td>No</td>
                                    <td>
                                      <span class="action-btn">
                                        <i class="fa-solid fa-trash-can"></i>
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Jassica William</td>
                                    <td>jassicawilliam@example.com</td>
                                    <td>Finance</td>
                                    <td>20 May 22, 11.45 AM</td>
                                    <td>No</td>
                                    <td>
                                      <span class="action-btn">
                                        <i class="fa-solid fa-trash-can"></i>
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Lizzy Wizzy</td>
                                    <td>lizzywizzy@example.com</td>
                                    <td>Power User</td>
                                    <td>20 May 22, 12.20 PM</td>
                                    <td>No</td>
                                    <td>
                                      <span class="action-btn">
                                        <i class="fa-solid fa-trash-can"></i>
                                      </span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="role-tab" role="tabpanel">
                        <div class="role-slider-content mt-4">
                          <div class="owl-carousel role-slider owl-theme">
                            <div class="item">
                              <div class="main-card">
                                <div class="role-header">
                                  <h6>Account Owner</h6>
                                  <span>1 per account</span>
                                </div>
                                <div class="role-body-content">
                                  <div class="role-item">
                                    <i class="fa-solid fa-check"></i>
                                    <span>Banking</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-check"></i>
                                    <span>Team members</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-check"></i>
                                    <span>Events</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-check"></i>
                                    <span>Reports</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-check"></i>
                                    <span>Customer service</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-check"></i>
                                    <span>Amend bookings</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-check"></i>
                                    <span>Gift certificates</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-check"></i>
                                    <span>Marketing tools</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-check"></i>
                                    <span>Integration tools</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-check"></i>
                                    <span>Scanning app</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="item">
                              <div class="main-card">
                                <div class="role-header">
                                  <h6>Power user</h6>
                                  <span>Unlimited</span>
                                </div>
                                <div class="role-body-content">
                                  <div class="role-item">
                                    <i class="fa-solid fa-xmark i-disabled"></i>
                                    <span>Banking</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-check"></i>
                                    <span>Team members</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-check"></i>
                                    <span>Events</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-check"></i>
                                    <span>Reports</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-check"></i>
                                    <span>Customer service</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-check"></i>
                                    <span>Amend bookings</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-check"></i>
                                    <span>Gift certificates</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-check"></i>
                                    <span>Marketing tools</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-check"></i>
                                    <span>Integration tools</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-check"></i>
                                    <span>Scanning app</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="item">
                              <div class="main-card">
                                <div class="role-header">
                                  <h6>Finance</h6>
                                  <span>Unlimited</span>
                                </div>
                                <div class="role-body-content">
                                  <div class="role-item">
                                    <i class="fa-solid fa-check"></i>
                                    <span>Banking</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-xmark i-disabled"></i>
                                    <span>Team members</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-xmark i-disabled"></i>
                                    <span>Events</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-check"></i>
                                    <span>Reports</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-xmark i-disabled"></i>
                                    <span>Customer service</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-xmark i-disabled"></i>
                                    <span>Amend bookings</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-xmark"></i>
                                    <span>Gift certificates</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-xmark i-disabled"></i>
                                    <span>Marketing tools</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-xmark i-disabled"></i>
                                    <span>Integration tools</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-xmark i-disabled"></i>
                                    <span>Scanning app</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="item">
                              <div class="main-card">
                                <div class="role-header">
                                  <h6>Basic access</h6>
                                  <span>Unlimited</span>
                                </div>
                                <div class="role-body-content">
                                  <div class="role-item">
                                    <i class="fa-solid fa-xmark i-disabled"></i>
                                    <span>Banking</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-xmark i-disabled"></i>
                                    <span>Team members</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-check"></i>
                                    <span>Events</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-check"></i>
                                    <span>Reports</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-check"></i>
                                    <span>Customer service</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-xmark i-disabled"></i>
                                    <span>Amend bookings</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-check"></i>
                                    <span>Gift certificates</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-check"></i>
                                    <span>Marketing tools</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-xmark i-disabled"></i>
                                    <span>Integration tools</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-check"></i>
                                    <span>Scanning app</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="item">
                              <div class="main-card">
                                <div class="role-header">
                                  <h6>Producer access</h6>
                                  <span>1 per event</span>
                                </div>
                                <div class="role-body-content">
                                  <div class="role-item">
                                    <i class="fa-solid fa-xmark i-disabled"></i>
                                    <span>Banking</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-xmark i-disabled"></i>
                                    <span>Team members</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-xmark i-disabled"></i>
                                    <span>Events</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-check"></i>
                                    <span>Reports</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-xmark i-disabled"></i>
                                    <span>Customer service</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-xmark i-disabled"></i>
                                    <span>Amend bookings</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-xmark i-disabled"></i>
                                    <span>Gift certificates</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-xmark i-disabled"></i>
                                    <span>Marketing tools</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-xmark i-disabled"></i>
                                    <span>Integration tools</span>
                                  </div>
                                  <div class="role-item">
                                    <i class="fa-solid fa-check"></i>
                                    <span>Scanning app</span>
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
        </div>
      </body>
    </>
  );
};

export default Team;
