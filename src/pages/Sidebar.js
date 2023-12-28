import React from "react";
import Footer from "./Footer";
import parkwell from "./remo.png";
const Sidebar = () => {
  return (
    <>
      <nav class="vertical_nav">
        <div class="left_section menu_left" id="js-menu">
          <div class="left_section">
            <ul>
              <li class="menu--item">
                <a
                  href="/dashboard"
                  class="menu--link"
                  title="Dashboard"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                >
                  <i class="fa-solid fa-gauge menu--icon"></i>
                  <span class="menu--label">Dashboard</span>
                </a>
              </li>
              <li class="menu--item">
                <a
                  href="/dashboard-event"
                  class="menu--link"
                  title="Events"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                >
                  <i class="fa-solid fa-calendar-days menu--icon"></i>
                  <span class="menu--label">Events</span>
                </a>
              </li>

              <li class="menu--item">
                <a
                  href="my_organisation_dashboard_contact_lists.html"
                  class="menu--link"
                  title="Contact List"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                >
                  <i class="fa-regular fa-address-card menu--icon"></i>
                  <span class="menu--label">Contact List</span>
                </a>
              </li>
              <li class="menu--item">
                <a
                  href="/dashboard-payout"
                  class="menu--link"
                  title="Payouts"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                >
                  <i class="fa-solid fa-credit-card menu--icon"></i>
                  <span class="menu--label">Payouts</span>
                </a>
              </li>
              <li class="menu--item">
                <a
                  href="/dashboard-report"
                  class="menu--link"
                  title="Reports"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                >
                  <i class="fa-solid fa-chart-pie menu--icon"></i>
                  <span class="menu--label">Reports</span>
                </a>
              </li>
              <li class="menu--item">
                <a
                  href="my_organisation_dashboard_subscription.html"
                  class="menu--link"
                  title="Subscription"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                >
                  <i class="fa-solid fa-bahai menu--icon"></i>
                  <span class="menu--label">Subscription</span>
                </a>
              </li>
              <li class="menu--item">
                <a
                  href="my_organisation_dashboard_conversion_setup.html"
                  class="menu--link"
                  title="Conversion Setup"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                >
                  <i class="fa-solid fa-square-plus menu--icon"></i>
                  <span class="menu--label">Conversion Setup</span>
                </a>
              </li>
              <li class="menu--item">
                <a
                  href="/dashboard-profile"
                  class="menu--link "
                  title="About"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                >
                  <i class="fa-solid fa-circle-info menu--icon"></i>
                  <span class="menu--label">About</span>
                </a>
              </li>
              <li class="menu--item">
                <a
                  href="/dashboard-team"
                  class="menu--link team-lock"
                  title="My Team"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                >
                  <i class="fa-solid fa-user-group menu--icon"></i>
                  <span class="menu--label">My Team</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
