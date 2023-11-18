import React from 'react';

const AppContact = () => {
  return (
    <React.Fragment>
      <div>
  {/* <div className="page-loader-wrapper">
    <div className="loader">
    </div>
  </div> */}
  <div id="main_content">
    <div id="header_top" className="header_top">
      <div className="container">
        <div className="hleft">
          <a className="header-brand" href="index.html"><i className="fa fa-graduation-cap brand-logo" /></a>
          <div className="dropdown">
            <a href="javascript:void(0)" className="nav-link icon menu_toggle"><i className="fe fe-align-center" /></a>
            <a href="page-search.html" className="nav-link icon"><i className="fe fe-search" data-toggle="tooltip" data-placement="right" title="Search..." /></a>
            <a href="app-email.html" className="nav-link icon app_inbox"><i className="fe fe-inbox" data-toggle="tooltip" data-placement="right" title="Inbox" /></a>
            <a href="app-filemanager.html" className="nav-link icon app_file xs-hide"><i className="fe fe-folder" data-toggle="tooltip" data-placement="right" title="File Manager" /></a>
            <a href="app-social.html" className="nav-link icon xs-hide"><i className="fe fe-share-2" data-toggle="tooltip" data-placement="right" title="Social Media" /></a>
            <a href="javascript:void(0)" className="nav-link icon theme_btn"><i className="fe fe-feather" /></a>
            <a href="javascript:void(0)" className="nav-link icon settingbar"><i className="fe fe-settings" /></a>
          </div>
        </div>
        <div className="hright">
          <a href="javascript:void(0)" className="nav-link icon right_tab"><i className="fe fe-align-right" /></a>
          <a href="login.html" className="nav-link icon settingbar"><i className="fe fe-power" /></a>
        </div>
      </div>
    </div>
    <div id="rightsidebar" className="right_sidebar">
      <a href="javascript:void(0)" className="p-3 settingbar float-right"><i className="fa fa-close" /></a>
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#Settings" aria-expanded="true">Settings</a></li>
        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#activity" aria-expanded="false">Activity</a></li>
      </ul>
      <div className="tab-content">
        <div role="tabpanel" className="tab-pane vivify fadeIn active" id="Settings" aria-expanded="true">
          <div className="mb-4">
            <h6 className="font-14 font-weight-bold text-muted">Theme Color</h6>
            <ul className="choose-skin list-unstyled mb-0">
              <li data-theme="azure"><div className="azure" /></li>
              <li data-theme="indigo"><div className="indigo" /></li>
              <li data-theme="purple"><div className="purple" /></li>
              <li data-theme="orange"><div className="orange" /></li>
              <li data-theme="green"><div className="green" /></li>
              <li data-theme="cyan" className="active"><div className="cyan" /></li>
              <li data-theme="blush"><div className="blush" /></li>
              <li data-theme="white"><div className="bg-white" /></li>
            </ul>
          </div>
          <div className="mb-4">
            <h6 className="font-14 font-weight-bold text-muted">Font Style</h6>
            <div className="custom-controls-stacked font_setting">
              <label className="custom-control custom-radio custom-control-inline">
                <input type="radio" className="custom-control-input" name="font" defaultValue="font-muli" defaultChecked />
                <span className="custom-control-label">Muli Google Font</span>
              </label>
              <label className="custom-control custom-radio custom-control-inline">
                <input type="radio" className="custom-control-input" name="font" defaultValue="font-montserrat" />
                <span className="custom-control-label">Montserrat Google Font</span>
              </label>
              <label className="custom-control custom-radio custom-control-inline">
                <input type="radio" className="custom-control-input" name="font" defaultValue="font-poppins" />
                <span className="custom-control-label">Poppins Google Font</span>
              </label>
            </div>
          </div>
          <div>
            <h6 className="font-14 font-weight-bold mt-4 text-muted">General Settings</h6>
            <ul className="setting-list list-unstyled mt-1 setting_switch">
              <li>
                <label className="custom-switch">
                  <span className="custom-switch-description">Night Mode</span>
                  <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-darkmode" />
                  <span className="custom-switch-indicator" />
                </label>
              </li>
              <li>
                <label className="custom-switch">
                  <span className="custom-switch-description">Fix Navbar top</span>
                  <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-fixnavbar" />
                  <span className="custom-switch-indicator" />
                </label>
              </li>
              <li>
                <label className="custom-switch">
                  <span className="custom-switch-description">Header Dark</span>
                  <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-pageheader" />
                  <span className="custom-switch-indicator" />
                </label>
              </li>
              <li>
                <label className="custom-switch">
                  <span className="custom-switch-description">Min Sidebar Dark</span>
                  <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-min_sidebar" />
                  <span className="custom-switch-indicator" />
                </label>
              </li>
              <li>
                <label className="custom-switch">
                  <span className="custom-switch-description">Sidebar Dark</span>
                  <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-sidebar" />
                  <span className="custom-switch-indicator" />
                </label>
              </li>
              <li>
                <label className="custom-switch">
                  <span className="custom-switch-description">Icon Color</span>
                  <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-iconcolor" />
                  <span className="custom-switch-indicator" />
                </label>
              </li>
              <li>
                <label className="custom-switch">
                  <span className="custom-switch-description">Gradient Color</span>
                  <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-gradient" defaultChecked />
                  <span className="custom-switch-indicator" />
                </label>
              </li>
              <li>
                <label className="custom-switch">
                  <span className="custom-switch-description">Box Shadow</span>
                  <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-boxshadow" />
                  <span className="custom-switch-indicator" />
                </label>
              </li>
              <li>
                <label className="custom-switch">
                  <span className="custom-switch-description">RTL Support</span>
                  <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-rtl" />
                  <span className="custom-switch-indicator" />
                </label>
              </li>
              <li>
                <label className="custom-switch">
                  <span className="custom-switch-description">Box Layout</span>
                  <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input btn-boxlayout" />
                  <span className="custom-switch-indicator" />
                </label>
              </li>
            </ul>
          </div>
          <hr />
          <div className="form-group">
            <label className="d-block">Storage <span className="float-right">77%</span></label>
            <div className="progress progress-sm">
              <div className="progress-bar" role="progressbar" aria-valuenow={77} aria-valuemin={0} aria-valuemax={100} style={{width: '77%'}} />
            </div>
            <button type="button" className="btn btn-primary btn-block mt-3">Upgrade Storage</button>
          </div>
        </div>
        <div role="tabpanel" className="tab-pane vivify fadeIn" id="activity" aria-expanded="false">
          <ul className="new_timeline mt-3">
            <li>
              <div className="bullet pink" />
              <div className="time">11:00am</div>
              <div className="desc">
                <h3>Attendance</h3>
                <h4>Computer Class</h4>
              </div>
            </li>
            <li>
              <div className="bullet pink" />
              <div className="time">11:30am</div>
              <div className="desc">
                <h3>Added an interest</h3>
                <h4>“Volunteer Activities”</h4>
              </div>
            </li>
            <li>
              <div className="bullet green" />
              <div className="time">12:00pm</div>
              <div className="desc">
                <h3>Developer Team</h3>
                <h4>Hangouts</h4>
                <ul className="list-unstyled team-info margin-0 p-t-5">
                  <li><img src="../assets/images/xs/avatar1.jpg" alt="Avatar" /></li>
                  <li><img src="../assets/images/xs/avatar2.jpg" alt="Avatar" /></li>
                  <li><img src="../assets/images/xs/avatar3.jpg" alt="Avatar" /></li>
                  <li><img src="../assets/images/xs/avatar4.jpg" alt="Avatar" /></li> 
                </ul>
              </div>
            </li>
            <li>
              <div className="bullet green" />
              <div className="time">2:00pm</div>
              <div className="desc">
                <h3>Responded to need</h3>
                <a href="javascript:void(0)">“In-Kind Opportunity”</a>
              </div>
            </li>
            <li>
              <div className="bullet orange" />
              <div className="time">1:30pm</div>
              <div className="desc">
                <h3>Lunch Break</h3>
              </div>
            </li>
            <li>
              <div className="bullet green" />
              <div className="time">2:38pm</div>
              <div className="desc">
                <h3>Finish</h3>
                <h4>Go to Home</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="theme_div">
      <div className="card">
        <div className="card-body">
          <ul className="list-group list-unstyled">
            <li className="list-group-item mb-2">
              <p>Light Version</p>
              <a href="index.html"><img src="../assets/images/themes/default.png" className="img-fluid" alt="" /></a>
            </li>
            <li className="list-group-item mb-2">
              <p>Dark Version</p>
              <a href="https://nsdbytes.com/template/ericssion/university-dark/index.html"><img src="../assets/images/themes/dark.png" className="img-fluid" alt="" /></a>
            </li>
            <li className="list-group-item mb-2">
              <p>RTL Version</p>
              <a href="https://nsdbytes.com/template/ericssion/university-rtl/index.html"><img src="../assets/images/themes/rtl.png" className="img-fluid" alt="" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/* <div className="user_div">
      <ul className="nav nav-tabs">
        <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#righttab-statistics">Statistics</a></li>
        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#righttab-Result">Result</a></li>
        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#righttab-Students">Student</a></li>
        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#righttab-Todo">Todo</a></li>
      </ul>
      <div className="tab-content mt-3">
        <div className="tab-pane fade show active" id="righttab-statistics" role="tabpanel">
          <div className="card">
            <div className="card-body">
              <div>Total Revenue</div>
              <div className="py-3 m-0 text-center h1 text-success">$79,452</div>
              <div className="d-flex">
                <span className="text-muted">Income</span>
                <div className="ml-auto"><i className="fa fa-caret-up text-success" />4%</div>
              </div>
            </div>
            <div className="card-footer">
              <ul className="list-unstyled mb-0">
                <li className="mb-3">
                  <div className="clearfix">
                    <div className="float-left"><strong>$43,320</strong></div>
                    <div className="float-right"><small className="text-muted">Bank of America</small></div>
                  </div>
                  <div className="progress progress-xxs">
                    <div className="progress-bar bg-azure" role="progressbar" style={{width: '87%'}} aria-valuenow={42} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </li>
                <li>
                  <div className="clearfix">
                    <div className="float-left"><strong>$36,132</strong></div>
                    <div className="float-right"><small className="text-muted">Wells Fargo</small></div>
                  </div>
                  <div className="progress progress-xxs">
                    <div className="progress-bar bg-green" role="progressbar" style={{width: '80%'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-body top_counter">
              <div className="icon bg-yellow"><i className="fa fa-users" /> </div>
              <div className="content">
                <span>Total Student</span>
                <h5 className="number mb-0">2,051</h5>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body top_counter">
              <div className="icon bg-gray"><i className="fa fa-sitemap" /> </div>
              <div className="content">
                <span>Department</span>
                <h5 className="number mb-0">14</h5>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body top_counter">
              <div className="icon bg-dark"><i className="fa fa-black-tie" /> </div>
              <div className="content">
                <span>Total Teacher</span>
                <h5 className="number mb-0">27</h5>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body top_counter">
              <div className="icon bg-azure"><i className="fa fa-tags" /> </div>
              <div className="content">
                <span>Total Courses</span>
                <h5 className="number mb-0">31</h5>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body top_counter">
              <div className="icon bg-pink"><i className="fa fa-credit-card" /> </div>
              <div className="content">
                <span>Expense</span>
                <h5 className="number mb-0">$7,254</h5>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body top_counter">
              <div className="icon bg-green"><i className="fa fa-bank" /> </div>
              <div className="content">
                <span>Total Income</span>
                <h5 className="number mb-0">$27,852</h5>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body top_counter">
              <div className="icon bg-cyan"><i className="fa fa-map-o" /> </div>
              <div className="content">
                <span>Our Center</span>
                <h5 className="number mb-0">52</h5>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body top_counter">
              <div className="icon bg-indigo"><i className="fa fa-smile-o" /> </div>
              <div className="content">
                <span>Smiley Face</span>
                <h5 className="number mb-0">10K</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="righttab-Result" role="tabpanel">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Result 2019</h3>
              <div className="card-options">
                <a href="#"><i className="fa fa-file-excel-o" data-toggle="tooltip" title="Export Excel" /></a>
              </div>
            </div>
            <div className="card-body">
              <ul className="list-unstyled">
                <li className="mb-3">
                  <div className="clearfix">
                    <div className="float-left"><strong>87%</strong></div>
                    <div className="float-right"><small className="text-muted">Art &amp; Design</small></div>
                  </div>
                  <div className="progress progress-xxs">
                    <div className="progress-bar bg-azure" role="progressbar" style={{width: '87%'}} aria-valuenow={42} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </li>
                <li className="mb-3">
                  <div className="clearfix">
                    <div className="float-left"><strong>80%</strong></div>
                    <div className="float-right"><small className="text-muted">Fashion</small></div>
                  </div>
                  <div className="progress progress-xxs">
                    <div className="progress-bar bg-green" role="progressbar" style={{width: '80%'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </li>
                <li className="mb-3">
                  <div className="clearfix">
                    <div className="float-left"><strong>63%</strong></div>
                    <div className="float-right"><small className="text-muted">Sports Science</small></div>
                  </div>
                  <div className="progress progress-xxs">
                    <div className="progress-bar bg-orange" role="progressbar" style={{width: '63%'}} aria-valuenow={36} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </li>
                <li className="mb-3">
                  <div className="clearfix">
                    <div className="float-left"><strong>91%</strong></div>
                    <div className="float-right"><small className="text-muted">Computers</small></div>
                  </div>
                  <div className="progress progress-xxs">
                    <div className="progress-bar bg-indigo" role="progressbar" style={{width: '91%'}} aria-valuenow={6} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </li>
                <li>
                  <div className="clearfix">
                    <div className="float-left"><strong>35%</strong></div>
                    <div className="float-right"><small className="text-muted">Biological Sciences</small></div>
                  </div>
                  <div className="progress progress-xxs">
                    <div className="progress-bar bg-pink" role="progressbar" style={{width: '35%'}} aria-valuenow={6} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </li>
              </ul>
            </div>
            <div className="card-footer">
              <div className="row text-center">
                <div className="col-6 border-right">
                  <label className="mb-0">Total Pass</label>
                  <div className="font-20 font-weight-bold">1,052</div>
                </div>
                <div className="col-6">
                  <label className="mb-0">Total Fail</label>
                  <div className="font-20 font-weight-bold">198</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Result 2018</h3>
              <div className="card-options">
                <a href="#"><i className="fa fa-file-excel-o" data-toggle="tooltip" title="Export Excel" /></a>
              </div>
            </div>
            <div className="card-body">
              <ul className="list-unstyled">
                <li className="mb-3">
                  <div className="clearfix">
                    <div className="float-left"><strong>80%</strong></div>
                    <div className="float-right"><small className="text-muted">Fashion</small></div>
                  </div>
                  <div className="progress progress-xxs">
                    <div className="progress-bar bg-green" role="progressbar" style={{width: '80%'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </li>
                <li className="mb-3">
                  <div className="clearfix">
                    <div className="float-left"><strong>87%</strong></div>
                    <div className="float-right"><small className="text-muted">Art &amp; Design</small></div>
                  </div>
                  <div className="progress progress-xxs">
                    <div className="progress-bar bg-azure" role="progressbar" style={{width: '87%'}} aria-valuenow={42} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </li>
                <li className="mb-3">
                  <div className="clearfix">
                    <div className="float-left"><strong>91%</strong></div>
                    <div className="float-right"><small className="text-muted">Computers</small></div>
                  </div>
                  <div className="progress progress-xxs">
                    <div className="progress-bar bg-indigo" role="progressbar" style={{width: '91%'}} aria-valuenow={6} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </li>
                <li className="mb-3">
                  <div className="clearfix">
                    <div className="float-left"><strong>35%</strong></div>
                    <div className="float-right"><small className="text-muted">Biological Sciences</small></div>
                  </div>
                  <div className="progress progress-xxs">
                    <div className="progress-bar bg-pink" role="progressbar" style={{width: '35%'}} aria-valuenow={6} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </li>
                <li>
                  <div className="clearfix">
                    <div className="float-left"><strong>63%</strong></div>
                    <div className="float-right"><small className="text-muted">Sports Science</small></div>
                  </div>
                  <div className="progress progress-xxs">
                    <div className="progress-bar bg-orange" role="progressbar" style={{width: '63%'}} aria-valuenow={36} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </li>
              </ul>
            </div>
            <div className="card-footer">
              <div className="row text-center">
                <div className="col-6 border-right">
                  <label className="mb-0">Total Pass</label>
                  <div className="font-20 font-weight-bold">845</div>
                </div>
                <div className="col-6">
                  <label className="mb-0">Total Fail</label>
                  <div className="font-20 font-weight-bold">142</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="righttab-Students" role="tabpanel">
          <div id="users">
            <div className="input-group mt-2 mb-2">
              <input type="text" className="form-control search" placeholder="Search Student" />
            </div>
            <ul className="right_chat list-unstyled list">
              <li className="alfabet">A</li>
              <li>
                <a href="javascript:void(0);" className="media">
                  <img className="media-object" src="../assets/images/xs/avatar1.jpg" alt="" />
                  <div className="media-body">
                    <span className="name">Abigail Churchill</span>
                    <span className="message">Art &amp; Design</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" className="media">
                  <img className="media-object" src="../assets/images/xs/avatar2.jpg" alt="" />
                  <div className="media-body">
                    <span className="name">Alexandra Carr</span>
                    <span className="message">Fashion</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" className="media">
                  <img className="media-object" src="../assets/images/xs/avatar3.jpg" alt="" />
                  <div className="media-body">
                    <span className="name">Alison Berry</span>
                    <span className="message">Fashion</span>
                  </div>
                </a>
              </li>
              <li className="alfabet">B</li>
              <li>
                <a href="javascript:void(0);" className="media">
                  <img className="media-object" src="../assets/images/xs/avatar4.jpg" alt="" />
                  <div className="media-body">
                    <span className="name">Bella Alan</span>
                    <span className="message">Sports Science</span>
                  </div>
                </a>
              </li>
              <li className="alfabet">C</li>
              <li>
                <a href="javascript:void(0);" className="media">
                  <img className="media-object" src="../assets/images/xs/avatar5.jpg" alt="" />
                  <div className="media-body">
                    <span className="name">Caroline Alan</span>
                    <span className="message">Sports Science</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" className="media">
                  <img className="media-object" src="../assets/images/xs/avatar6.jpg" alt="" />
                  <div className="media-body">
                    <span className="name">Connor Campbell</span>
                    <span className="message">Computers</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" className="media">
                  <img className="media-object" src="../assets/images/xs/avatar7.jpg" alt="" />
                  <div className="media-body">
                    <span className="name">Charles Campbell</span>
                    <span className="message">Computers</span>
                  </div>
                </a>
              </li>
              <li className="alfabet">D</li>
              <li>
                <a href="javascript:void(0);" className="media">
                  <img className="media-object" src="../assets/images/xs/avatar8.jpg" alt="" />
                  <div className="media-body">
                    <span className="name">Donna Hudson</span>
                    <span className="message">Computers</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" className="media">
                  <img className="media-object" src="../assets/images/xs/avatar9.jpg" alt="" />
                  <div className="media-body">
                    <span className="name">Dylan Jones</span>
                    <span className="message">Computers</span>
                  </div>
                </a>
              </li>
              <li className="alfabet">G</li>
              <li>
                <a href="javascript:void(0);" className="media">
                  <img className="media-object" src="../assets/images/xs/avatar8.jpg" alt="" />
                  <div className="media-body">
                    <span className="name">Gordon Hudson</span>
                    <span className="message">Sports Science</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" className="media">
                  <img className="media-object" src="../assets/images/xs/avatar9.jpg" alt="" />
                  <div className="media-body">
                    <span className="name">Gabrielle Walker</span>
                    <span className="message">Computers</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" className="media">
                  <img className="media-object" src="../assets/images/xs/avatar10.jpg" alt="" />
                  <div className="media-body">
                    <span className="name">Gavin North</span>
                    <span className="message">Computers</span>
                  </div>
                </a>
              </li>
              <li className="alfabet">S</li>
              <li>
                <a href="javascript:void(0);" className="media">
                  <img className="media-object" src="../assets/images/xs/avatar1.jpg" alt="" />
                  <div className="media-body">
                    <span className="name">Stephanie Hudson</span>
                    <span className="message">Sports Science</span>
                  </div>
                </a>
              </li>
              <li className="alfabet">W</li>
              <li>
                <a href="javascript:void(0);" className="media">
                  <img className="media-object" src="../assets/images/xs/avatar1.jpg" alt="" />
                  <div className="media-body">
                    <span className="name">William Paige</span>
                    <span className="message">Fashion</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="user_chatbody chat_app">
            <div className="card-header bline pt-1 pl-0 pr-0">
              <h3 className="card-title">Abigail Churchill <small>Online</small></h3>
              <div className="card-options">
                <a href="javascript:void(0)" className="p-1" data-toggle="dropdown"><i className="fa fa-cog" /></a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                  <a className="dropdown-item active" href="#">Online</a>
                  <a className="dropdown-item" href="#">Away</a>
                  <a className="dropdown-item" href="#">Do not disturb</a>
                  <a className="dropdown-item" href="#">Invisible</a>
                </div>
                <a href="javascript:void(0)" className="p-1 chat_close"><i className="fa fa-close" /></a>
              </div>
            </div>
            <div className="chat_windows">
              <ul className="mb-0">
                <li className="other-message">
                  <img className="avatar mr-3" src="../assets/images/xs/avatar1.jpg" alt="avatar" />
                  <div className="message">
                    <p className="bg-light-blue">Are we meeting today?</p>
                    <span className="time">10:10 AM, Today</span>
                  </div>
                </li>
                <li className="other-message">
                  <img className="avatar mr-3" src="../assets/images/xs/avatar1.jpg" alt="avatar" />
                  <div className="message">
                    <p className="bg-light-blue">Hi Aiden, how are you? How is the project coming along?</p>
                    <p className="bg-light-blue">Are we meeting today?</p>
                    <span className="time">10:15 AM, Today</span>
                  </div>
                </li>
                <li className="my-message">
                  <div className="message">
                    <p className="bg-light-gray">Project has been already finished and I have results to show you.</p>
                    <div className="file_folder">
                      <a href="javascript:void(0);">
                        <div className="icon">
                          <i className="fa fa-file-excel-o text-success" />
                        </div>
                        <div className="file-name">
                          <p className="mb-0 text-muted">Report2017.xls</p>
                          <small>Size: 68KB</small>
                        </div>
                      </a>
                    </div>
                    <span className="time">10:17 AM, Today</span>
                  </div>
                </li>
                <li className="other-message">
                  <img className="avatar mr-3" src="../assets/images/xs/avatar1.jpg" alt="avatar" />
                  <div className="message">
                    <div className="media_img">
                      <img src="../assets/images/gallery/1.jpg" className="w100 img-thumbnail" alt="" />
                      <img src="../assets/images/gallery/2.jpg" className="w100 img-thumbnail" alt="" />
                    </div>
                    <span className="time">10:15 AM, Today</span>
                  </div>
                </li>
                <li className="other-message">
                  <img className="avatar mr-3" src="../assets/images/xs/avatar1.jpg" alt="avatar" />
                  <div className="message">
                    <p className="bg-light-blue">Are we meeting today I have results?</p>
                    <span className="time">10:18 AM, Today</span>
                  </div>
                </li>
                <li className="my-message">
                  <div className="message">
                    <p className="bg-light-gray">Well we have good budget for the project</p>
                    <span className="time">10:25 AM, Today</span>
                  </div>
                </li>
              </ul>
              <div className="chat-message clearfix">
                <a href="javascript:void(0);"><i className="icon-camera" /></a>
                <a href="javascript:void(0);"><i className="icon-camcorder" /></a>
                <a href="javascript:void(0);"><i className="icon-paper-plane" /></a>
                <div className="input-group mb-0">
                  <input type="text" className="form-control" placeholder="Enter text here..." />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="righttab-Todo" role="tabpanel">
          <ul className="list-unstyled mb-0 todo_list">
            <li>
              <label className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" name="example-checkbox1" defaultValue="option1" defaultChecked />
                <span className="custom-control-label">Report Panel Usag</span>
              </label>
            </li>
            <li>
              <label className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" name="example-checkbox1" defaultValue="option1" />
                <span className="custom-control-label">Report Panel Usag</span>
              </label>
            </li>
            <li>
              <label className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" name="example-checkbox1" defaultValue="option1" defaultChecked />
                <span className="custom-control-label">New logo design for Angular Admin</span>
              </label>
            </li>
            <li>
              <label className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" name="example-checkbox1" defaultValue="option1" />
                <span className="custom-control-label">Design PSD files for Angular Admin</span>
              </label>
            </li>
            <li>
              <label className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" name="example-checkbox1" defaultValue="option1" defaultChecked />
                <span className="custom-control-label">New logo design for Angular Admin</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div> */}
    <div id="left-sidebar" className="sidebar">
      <h5 className="brand-name">Ericsson<a href="javascript:void(0)" className="menu_option float-right"><i className="icon-grid font-16" data-toggle="tooltip" data-placement="left" title="Grid & List Toggle" /></a></h5>
      <ul className="nav nav-tabs">
        <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#menu-uni">University</a></li>
        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#menu-admin">Admin</a></li>
      </ul>
      <div className="tab-content mt-3">
        <div className="tab-pane fade show active" id="menu-uni" role="tabpanel">
          <nav className="sidebar-nav">
            <ul className="metismenu">
              <li><a href="index.html"><i className="fa fa-dashboard" /><span>Dashboard</span></a></li>
              <li><a href="professors.html"><i className="fa fa-black-tie" /><span>Professors</span></a></li>
              <li><a href="staff.html"><i className="fa fa-user-circle-o" /><span>Staff</span></a></li>
              <li><a href="students.html"><i className="fa fa-users" /><span>Students</span></a></li>
              <li><a href="departments.html"><i className="fa fa-users" /><span>Departments</span></a></li>
              <li><a href="courses.html"><i className="fa fa-graduation-cap" /><span>Courses</span></a></li>
              <li><a href="library.html"><i className="fa fa-book" /><span>Library</span></a></li>
              <li><a href="holiday.html"><i className="fa fa-bullhorn" /><span>Holiday</span></a></li>
              <li className="g_heading">Extra</li>
              <li><a href="events.html"><i className="fa fa-calendar" /><span>Calender</span></a></li>
              <li><a href="app-chat.html"><i className="fa fa-comments-o" /><span>Chat App</span></a></li>
              <li className="active"><a href="app-contact.html"><i className="fa fa-address-book" /><span>Contact</span></a></li>
              <li><a href="app-filemanager.html"><i className="fa fa-folder" /><span>FileManager</span></a></li>
              <li><a href="our-centres.html"><i className="fa fa-map" /><span>OurCentres</span></a></li>
              <li><a href="gallery.html"><i className="fa fa-camera-retro" /><span>Gallery</span></a></li>
            </ul>
          </nav>
        </div>
        <div className="tab-pane fade" id="menu-admin" role="tabpanel">
          <nav className="sidebar-nav">
            <ul className="metismenu">
              <li><a href="payments.html"><i className="fa fa-credit-card" /><span>Payments</span></a></li>
              <li><a href="noticeboard.html"><i className="fa fa-dashboard" /><span>Noticeboard</span></a></li>
              <li><a href="taskboard.html"><i className="fa fa-list-ul" /><span>Taskboard</span></a></li>
              <li><a href="hostel.html"><i className="fa fa-bed" /><span>Hostel</span></a></li>
              <li><a href="transport.html"><i className="fa fa-truck" /><span>Transport</span></a></li>
              <li><a href="attendance.html"><i className="fa fa-calendar-check-o" /><span>Attendance</span></a></li>
              <li><a href="leave.html"><i className="fa fa-flag" /><span>Leave</span></a></li>
              <li><a href="setting.html"><i className="fa fa-gear" /><span>Settings</span></a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div className="page">
      <div className="section-body" id="page_top">
        <div className="container-fluid">
          <div className="page-header">
            <div className="left">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="What you want to find" />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button">Search</button>
                </div>
              </div>
            </div>
            <div className="right">
              <ul className="nav nav-pills">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="page-empty.html">Empty page</a>
                    <a className="dropdown-item" href="page-profile.html">Profile</a>
                    <a className="dropdown-item" href="page-search.html">Search Results</a>
                    <a className="dropdown-item" href="page-timeline.html">Timeline</a>
                    <a className="dropdown-item" href="page-invoices.html">Invoices</a>
                    <a className="dropdown-item" href="page-pricing.html">Pricing</a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Auth</a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="login.html">Login</a>
                    <a className="dropdown-item" href="register.html">Register</a>
                    <a className="dropdown-item" href="forgot-password.html">Forgot password</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="404.html">404 error</a>
                    <a className="dropdown-item" href="500.html">500 error</a>
                  </div>
                </li>
              </ul>
              <div className="notification d-flex">
                <div className="dropdown d-flex">
                  <a className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1" data-toggle="dropdown"><i className="fa fa-language" /></a>
                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                    <a className="dropdown-item" href="#"><img className="w20 mr-2" src="https://nsdbytes.com/template/ericssion/assets/images/flags/us.svg" alt="" />English</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#"><img className="w20 mr-2" src="https://nsdbytes.com/template/ericssion/assets/images/flags/es.svg" alt="" />Spanish</a>
                    <a className="dropdown-item" href="#"><img className="w20 mr-2" src="https://nsdbytes.com/template/ericssion/assets/images/flags/jp.svg" alt="" />japanese</a>
                    <a className="dropdown-item" href="#"><img className="w20 mr-2" src="https://nsdbytes.com/template/ericssion/assets/images/flags/bl.svg" alt="" />France</a>
                  </div>
                </div>
                <div className="dropdown d-flex">
                  <a className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1" data-toggle="dropdown"><i className="fa fa-envelope" /><span className="badge badge-success nav-unread" /></a>
                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                    <ul className="right_chat list-unstyled w350 p-0">
                      <li className="online">
                        <a href="javascript:void(0);" className="media">
                          <img className="media-object" src="../assets/images/xs/avatar4.jpg" alt="" />
                          <div className="media-body">
                            <span className="name">Donald Gardner</span>
                            <div className="message">It is a long established fact that a reader</div>
                            <small>11 mins ago</small>
                            <span className="badge badge-outline status" />
                          </div>
                        </a>
                      </li>
                      <li className="online">
                        <a href="javascript:void(0);" className="media">
                          <img className="media-object " src="../assets/images/xs/avatar5.jpg" alt="" />
                          <div className="media-body">
                            <span className="name">Wendy Keen</span>
                            <div className="message">There are many variations of passages of Lorem Ipsum</div>
                            <small>18 mins ago</small>
                            <span className="badge badge-outline status" />
                          </div>
                        </a>
                      </li>
                      <li className="offline">
                        <a href="javascript:void(0);" className="media">
                          <img className="media-object " src="../assets/images/xs/avatar2.jpg" alt="" />
                          <div className="media-body">
                            <span className="name">Matt Rosales</span>
                            <div className="message">Contrary to popular belief, Lorem Ipsum is not simply</div>
                            <small>27 mins ago</small>
                            <span className="badge badge-outline status" />
                          </div>
                        </a>
                      </li>
                      <li className="online">
                        <a href="javascript:void(0);" className="media">
                          <img className="media-object " src="../assets/images/xs/avatar3.jpg" alt="" />
                          <div className="media-body">
                            <span className="name">Phillip Smith</span>
                            <div className="message">It has roots in a piece of classical Latin literature from 45 BC</div>
                            <small>33 mins ago</small>
                            <span className="badge badge-outline status" />
                          </div>
                        </a>
                      </li>
                    </ul>
                    <div className="dropdown-divider" />
                    <a href="javascript:void(0)" className="dropdown-item text-center text-muted-dark readall">Mark all as read</a>
                  </div>
                </div>
                <div className="dropdown d-flex">
                  <a className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-1" data-toggle="dropdown"><i className="fa fa-bell" /><span className="badge badge-primary nav-unread" /></a>
                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                    <ul className="list-unstyled feeds_widget">
                      <li>
                        <div className="feeds-left">
                          <span className="avatar avatar-blue"><i className="fa fa-check" /></span>
                        </div>
                        <div className="feeds-body ml-3">
                          <p className="text-muted mb-0">Campaign <strong className="text-blue font-weight-bold">Holiday</strong> is nearly reach budget limit.</p>
                        </div>
                      </li>
                      <li>
                        <div className="feeds-left">
                          <span className="avatar avatar-green"><i className="fa fa-user" /></span>
                        </div>
                        <div className="feeds-body ml-3">
                          <p className="text-muted mb-0">New admission <strong className="text-green font-weight-bold">32</strong> in computer department.</p>
                        </div>
                      </li>
                      <li>
                        <div className="feeds-left">
                          <span className="avatar avatar-red"><i className="fa fa-info" /></span>
                        </div>
                        <div className="feeds-body ml-3">
                          <p className="text-muted mb-0">6th sem result <strong className="text-red font-weight-bold">67%</strong> in computer department.</p>
                        </div>
                      </li>
                      <li>
                        <div className="feeds-left">
                          <span className="avatar avatar-azure"><i className="fa fa-thumbs-o-up" /></span>
                        </div>
                        <div className="feeds-body ml-3">
                          <p className="text-muted mb-0">New Feedback <strong className="text-azure font-weight-bold">53</strong> for university assessment.</p>
                        </div>
                      </li>
                    </ul>
                    <div className="dropdown-divider" />
                    <a href="javascript:void(0)" className="dropdown-item text-center text-muted-dark readall">Mark all as read</a>
                  </div>
                </div>
                <div className="dropdown d-flex">
                  <a href="javascript:void(0)" className="chip ml-3" data-toggle="dropdown">
                    <span className="avatar" style={{backgroundImage: 'url(../assets/images/xs/avatar5.jpg)'}} /> George</a>
                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                    <a className="dropdown-item" href="page-profile.html"><i className="dropdown-icon fe fe-user" /> Profile</a>
                    <a className="dropdown-item" href="app-setting.html"><i className="dropdown-icon fe fe-settings" /> Settings</a>
                    <a className="dropdown-item" href="app-email.html"><span className="float-right"><span className="badge badge-primary">6</span></span><i className="dropdown-icon fe fe-mail" /> Inbox</a>
                    <a className="dropdown-item" href="javascript:void(0)"><i className="dropdown-icon fe fe-send" /> Message</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="javascript:void(0)"><i className="dropdown-icon fe fe-help-circle" /> Need help?</a>
                    <a className="dropdown-item" href="login.html"><i className="dropdown-icon fe fe-log-out" /> Sign out</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-body">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center ">
            <div className="header-action">
              <h1 className="page-title">Contact</h1>
              <ol className="breadcrumb page-breadcrumb">
                <li className="breadcrumb-item"><a href="#">Ericsson</a></li>
                <li className="breadcrumb-item active" aria-current="page">Contact</li>
              </ol>
            </div>
            <ul className="nav nav-tabs page-header-tab">
              <li className="nav-item"><a className="nav-link active" id="list-tab" data-toggle="tab" href="#list"><i className="fa fa-list-ul" /> List</a></li>
              <li className="nav-item"><a className="nav-link" id="grid-tab" data-toggle="tab" href="#grid"><i className="fa fa-th" /> Grid</a></li>
              <li className="nav-item"><a className="nav-link" id="addnew-tab" data-toggle="tab" href="#addnew"><i className="fa fa-plus" /> Add New</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="section-body mt-4">
        <div className="container-fluid">
          <div className="tab-content">
            <div className="tab-pane fade show active" id="list" role="tabpanel">
              <div className="table-responsive" id="users">
                <table className="table table-hover table-vcenter text-nowrap table_custom list">
                  <tbody>
                    <tr className>
                      <td className="width35 hidden-xs">
                        <a href="javascript:void(0);" className="mail-star"><i className="fa fa-star" /></a>
                      </td>
                      <td className="text-center width40">
                        <div className="avatar d-block">
                          <img className="avatar" src="../assets/images/xs/avatar4.jpg" alt="avatar" />
                        </div>
                      </td>
                      <td>
                        <div><a href="javascript:void(0);">John Smith</a></div>
                        <div className="text-muted">+264-625-2583</div>
                      </td>
                      <td className="hidden-xs">
                        <div className="text-muted"><a href="https://nsdbytes.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="96fcf9fef8e5fbffe2fed6fff8f0f9b8f5f9fb">[email&nbsp;protected]</a></div>
                      </td>
                      <td className="hidden-sm">
                        <div className="text-muted">455 S. Airport St. Moncks Corner, SC 29461</div>
                      </td>
                      <td className="text-right">
                        <a className="btn btn-icon btn-sm" href="javascript:void(0)" data-toggle="tooltip" title="Phone"><i className="fa fa-phone" /></a>
                        <a className="btn btn-icon btn-sm" href="javascript:void(0)" data-toggle="tooltip" title="Mail"><i className="fa fa-envelope" /></a>
                        <a className="btn btn-icon btn-sm text-danger hidden-xs js-sweetalert" data-type="confirm" href="javascript:void(0)" data-toggle="tooltip" title="Delete"><i className="fa fa-trash" /></a>
                      </td>
                    </tr>
                    <tr className>
                      <td className="width35 hidden-xs">
                        <a href="javascript:void(0);" className="mail-star active"><i className="fa fa-star" /></a>
                      </td>
                      <td className="text-center width40">
                        <div className="avatar d-block">
                          <img className="avatar" src="../assets/images/xs/avatar2.jpg" alt="avatar" />
                        </div>
                      </td>
                      <td>
                        <div><a href="javascript:void(0);">Merri Diamond</a></div>
                        <div className="text-muted">+264-625-2583</div>
                      </td>
                      <td className="hidden-xs">
                        <div className="text-muted"><a href="https://nsdbytes.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="0a626f78676b64686f69614a63646c6524696567">[email&nbsp;protected]</a></div>
                      </td>
                      <td className="hidden-sm">
                        <div className="text-muted">455 S. Airport St. Moncks Corner, SC 29461</div>
                      </td>
                      <td className="text-right">
                        <a className="btn btn-icon btn-sm" href="javascript:void(0)" data-toggle="tooltip" title="Phone"><i className="fa fa-phone" /></a>
                        <a className="btn btn-icon btn-sm" href="javascript:void(0)" data-toggle="tooltip" title="Mail"><i className="fa fa-envelope" /></a>
                        <a className="btn btn-icon btn-sm text-danger hidden-xs js-sweetalert" data-type="confirm" href="javascript:void(0)" data-toggle="tooltip" title="Delete"><i className="fa fa-trash" /></a>
                      </td>
                    </tr>
                    <tr className>
                      <td className="hidden-xs">
                        <a href="javascript:void(0);" className="mail-star love"><i className="fa fa-heart" /></a>
                      </td>
                      <td className="text-center width40">
                        <div className="avatar d-block">
                          <img className="avatar" src="../assets/images/xs/avatar3.jpg" alt="avatar" />
                        </div>
                      </td>
                      <td>
                        <div className="from"><a href="javascript:void(0);">Sara Hopkins</a></div>
                        <div className="text-muted">+264-625-3333</div>
                      </td>
                      <td className="hidden-xs">
                        <div className="text-muted"><a href="https://nsdbytes.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="ef828e9d968e8b8e829caf86818980c18c8082">[email&nbsp;protected]</a></div>
                      </td>
                      <td className="hidden-sm">
                        <div className="text-muted">19 Ohio St. Snellville, GA 30039</div>
                      </td>
                      <td className="text-right">
                        <a className="btn btn-icon btn-sm" href="javascript:void(0)" data-toggle="tooltip" title="Phone"><i className="fa fa-phone" /></a>
                        <a className="btn btn-icon btn-sm" href="javascript:void(0)" data-toggle="tooltip" title="Mail"><i className="fa fa-envelope" /></a>
                        <a className="btn btn-icon btn-sm text-danger hidden-xs js-sweetalert" data-type="confirm" href="javascript:void(0)" data-toggle="tooltip" title="Delete"><i className="fa fa-trash" /></a>
                      </td>
                    </tr>
                    <tr className>
                      <td className="hidden-xs">
                        <a href="javascript:void(0);" className="mail-star active"><i className="fa fa-star" /></a>
                      </td>
                      <td className="text-center width40">
                        <div className="avatar d-block">
                          <img className="avatar" src="../assets/images/xs/avatar7.jpg" alt="avatar" />
                        </div>
                      </td>
                      <td>
                        <div className="from"><a href="javascript:void(0);">Andrew Patrick</a></div>
                        <div className="text-muted">+264-625-2586</div>
                      </td>
                      <td className="hidden-xs">
                        <div className="text-muted"><a href="https://nsdbytes.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="a5c8cccec0d1cdccc8c4d6e5cccbc3ca8bc6cac8">[email&nbsp;protected]</a></div>
                      </td>
                      <td className="hidden-sm">
                        <div className="text-muted">728 Blackburn St. Andover, MA 01810</div>
                      </td>
                      <td className="text-right">
                        <a className="btn btn-icon btn-sm" href="javascript:void(0)" data-toggle="tooltip" title="Phone"><i className="fa fa-phone" /></a>
                        <a className="btn btn-icon btn-sm" href="javascript:void(0)" data-toggle="tooltip" title="Mail"><i className="fa fa-envelope" /></a>
                        <a className="btn btn-icon btn-sm text-danger hidden-xs js-sweetalert" data-type="confirm" href="javascript:void(0)" data-toggle="tooltip" title="Delete"><i className="fa fa-trash" /></a>
                      </td>
                    </tr>
                    <tr className>
                      <td className="hidden-xs">
                        <a href="javascript:void(0);" className="mail-star"><i className="fa fa-star" /></a>
                      </td>
                      <td className="text-center width40">
                        <div className="avatar d-block">
                          <img className="avatar" src="../assets/images/xs/avatar5.jpg" alt="avatar" />
                        </div>
                      </td>
                      <td>
                        <div className="from"><a href="javascript:void(0);">Claire Peters</a></div>
                        <div className="text-muted">+264-625-3333</div>
                      </td>
                      <td className="hidden-xs">
                        <div className="text-muted"><a href="https://nsdbytes.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="85e6e9e4ecf7e0f5e0f1e0f7f6c5ecebe3eaabe6eae8">[email&nbsp;protected]</a></div>
                      </td>
                      <td className="hidden-sm">
                        <div className="text-muted">19 Ohio St. Snellville, GA 30039</div> 
                      </td>
                      <td className="text-right">
                        <a className="btn btn-icon btn-sm" href="javascript:void(0)" data-toggle="tooltip" title="Phone"><i className="fa fa-phone" /></a>
                        <a className="btn btn-icon btn-sm" href="javascript:void(0)" data-toggle="tooltip" title="Mail"><i className="fa fa-envelope" /></a>
                        <a className="btn btn-icon btn-sm text-danger hidden-xs js-sweetalert" data-type="confirm" href="javascript:void(0)" data-toggle="tooltip" title="Delete"><i className="fa fa-trash" /></a>
                      </td>
                    </tr>
                    <tr className>
                      <td className="hidden-xs">
                        <a href="javascript:void(0);" className="mail-star"><i className="fa fa-star" /></a>
                      </td>
                      <td className="text-center width40">
                        <div className="avatar d-block">
                          <img className="avatar" src="../assets/images/xs/avatar6.jpg" alt="avatar" />
                        </div>
                      </td>
                      <td>
                        <div className="from"><a href="javascript:void(0);">Allen Collins</a></div>
                        <div className="text-muted">+264-625-4526</div>
                      </td>
                      <td className="hidden-xs">
                        <div className="text-muted"><a href="https://nsdbytes.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="7f141a110f1e0b0d161c143f16111910511c1012">[email&nbsp;protected]</a></div>
                      </td>
                      <td className="hidden-sm">
                        <div className="text-muted">728 Blackburn St. Andover, MA 01810</div>
                      </td>
                      <td className="text-right">
                        <a className="btn btn-icon btn-sm" href="javascript:void(0)" data-toggle="tooltip" title="Phone"><i className="fa fa-phone" /></a>
                        <a className="btn btn-icon btn-sm" href="javascript:void(0)" data-toggle="tooltip" title="Mail"><i className="fa fa-envelope" /></a>
                        <a className="btn btn-icon btn-sm text-danger hidden-xs js-sweetalert" data-type="confirm" href="javascript:void(0)" data-toggle="tooltip" title="Delete"><i className="fa fa-trash" /></a>
                      </td>
                    </tr>
                    <tr className>
                      <td className="width35 hidden-xs">
                        <a href="javascript:void(0);" className="mail-star"><i className="fa fa-star" /></a>
                      </td>
                      <td className="text-center width40">
                        <div className="avatar d-block">
                          <img className="avatar" src="../assets/images/xs/avatar4.jpg" alt="avatar" />
                        </div>
                      </td>
                      <td>
                        <div><a href="javascript:void(0);">Erin Gonzales</a></div>
                        <div className="text-muted">+264-625-1593</div>
                      </td>
                      <td className="hidden-xs">
                        <div className="text-muted"><a href="https://nsdbytes.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="d4b1a6bdbab3bbbaaeb5b8b1a794bdbab2bbfab7bbb9">[email&nbsp;protected]</a></div>
                      </td>
                      <td className="hidden-sm">
                        <div className="text-muted">455 S. Airport St. Moncks Corner, SC 29461</div>
                      </td>
                      <td className="text-right">
                        <a className="btn btn-icon btn-sm" href="javascript:void(0)" data-toggle="tooltip" title="Phone"><i className="fa fa-phone" /></a>
                        <a className="btn btn-icon btn-sm" href="javascript:void(0)" data-toggle="tooltip" title="Mail"><i className="fa fa-envelope" /></a>
                        <a className="btn btn-icon btn-sm text-danger hidden-xs js-sweetalert" data-type="confirm" href="javascript:void(0)" data-toggle="tooltip" title="Delete"><i className="fa fa-trash" /></a>
                      </td>
                    </tr>
                    <tr className>
                      <td className="hidden-xs">
                        <a href="javascript:void(0);" className="mail-star"><i className="fa fa-star" /></a>
                      </td>
                      <td className="text-center width40">
                        <div className="avatar d-block">
                          <img className="avatar" src="../assets/images/xs/avatar5.jpg" alt="avatar" />
                        </div>
                      </td>
                      <td>
                        <div className="from"><a href="javascript:void(0);">Harry McCall</a></div>
                        <div className="text-muted">+264-625-2468</div>
                      </td>
                      <td className="hidden-xs">
                        <div className="text-muted"><a href="https://nsdbytes.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="8efdfbfde7ebf9e7e2e2e7fdcee7e0e8e1a0ede1e3">[email&nbsp;protected]</a></div>
                      </td>
                      <td className="hidden-sm">
                        <div className="text-muted">19 Ohio St. Snellville, GA 30039</div>
                      </td>
                      <td className="text-right">
                        <a className="btn btn-icon btn-sm" href="javascript:void(0)" data-toggle="tooltip" title="Phone"><i className="fa fa-phone" /></a>
                        <a className="btn btn-icon btn-sm" href="javascript:void(0)" data-toggle="tooltip" title="Mail"><i className="fa fa-envelope" /></a>
                        <a className="btn btn-icon btn-sm text-danger hidden-xs js-sweetalert" data-type="confirm" href="javascript:void(0)" data-toggle="tooltip" title="Delete"><i className="fa fa-trash" /></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="tab-pane fade" id="grid" role="tabpanel">
              <div className="row row-deck">
                <div className="col-xl-4 col-md-6 col-sm-12">
                  <div className="card ">
                    <div className="card-body">
                      <div className="card-status bg-blue" />
                      <div className="mb-3"> <img src="../assets/images/sm/avatar1.jpg" className="rounded-circle w100" alt="" /> </div>
                      <div className="mb-2">
                        <h5 className="mb-0">Paul Schmidt</h5>
                        <p className="text-muted"><a href="https://nsdbytes.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="2d6c4c4144574848594542404c5e6d44434b42034e4240">[email&nbsp;protected]</a></p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt</span>
                      </div>
                      <span className="font-12 text-muted">Common Contact</span>
                      <ul className="list-unstyled team-info margin-0 pt-2">
                        <li><img src="../assets/images/xs/avatar1.jpg" alt="Avatar" /></li>
                        <li><img src="../assets/images/xs/avatar8.jpg" alt="Avatar" /></li>
                        <li><img src="../assets/images/xs/avatar2.jpg" alt="Avatar" /></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                  <div className="card ">
                    <div className="card-body">
                      <div className="mb-3"> <img src="../assets/images/sm/avatar2.jpg" className="rounded-circle w100" alt="" /> </div>
                      <div className="mb-2">
                        <h5 className="mb-0">Andrew Patrick</h5>
                        <p><a href="https://nsdbytes.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="c485a5a8adbea1a1b0acaba9a5b784adaaa2abeaa7aba9">[email&nbsp;protected]</a></p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt</span>
                      </div>
                      <span className="font-12 text-muted">Common Contact</span>
                      <ul className="list-unstyled team-info margin-0 pt-2">
                        <li><img src="../assets/images/xs/avatar1.jpg" alt="Avatar" /></li>
                        <li><img src="../assets/images/xs/avatar2.jpg" alt="Avatar" /></li>
                        <li><img src="../assets/images/xs/avatar3.jpg" alt="Avatar" /></li>
                        <li><img src="../assets/images/xs/avatar4.jpg" alt="Avatar" /></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                  <div className="card ">
                    <div className="card-body">
                      <div className="mb-3"> <img src="../assets/images/sm/avatar3.jpg" className="rounded-circle w100" alt="" /> </div>
                      <div className="mb-2">
                        <h5 className="mb-0">Mary Schneider</h5>
                        <p><a href="https://nsdbytes.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="6b2a0a0702110e0e1f0304060a182b02050d0445080406">[email&nbsp;protected]</a></p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt</span>
                      </div>
                      <span className="font-12 text-muted">Common Contact</span>
                      <ul className="list-unstyled team-info margin-0 pt-2">
                        <li><img src="../assets/images/xs/avatar1.jpg" alt="Avatar" /></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                  <div className="card ">
                    <div className="card-body">
                      <div className="card-status bg-green" />
                      <div className="mb-3"> <img src="../assets/images/sm/avatar4.jpg" className="rounded-circle w100" alt="" /> </div>
                      <div className="mb-2">
                        <h5 className="mb-0">Sean Black</h5>
                        <p><a href="https://nsdbytes.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="9ddcfcf1f4e7f8f8e9f5f2f0fceeddf4f3fbf2b3fef2f0">[email&nbsp;protected]</a></p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt</span>
                      </div>
                      <span className="font-12 text-muted">Common Contact</span>
                      <ul className="list-unstyled team-info margin-0 pt-2">
                        <li><img src="../assets/images/xs/avatar2.jpg" alt="Avatar" /></li>
                        <li><img src="../assets/images/xs/avatar6.jpg" alt="Avatar" /></li>
                        <li><img src="../assets/images/xs/avatar5.jpg" alt="Avatar" /></li>
                        <li><img src="../assets/images/xs/avatar7.jpg" alt="Avatar" /></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                  <div className="card ">
                    <div className="card-body">
                      <div className="mb-3"> <img src="../assets/images/sm/avatar5.jpg" className="rounded-circle w100" alt="" /> </div>
                      <div className="mb-2">
                        <h5 className="mb-0">David Wallace</h5>
                        <p><a href="https://nsdbytes.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="155474797c6f7070617d7a787466557c7b737a3b767a78">[email&nbsp;protected]</a></p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt</span>
                      </div>
                      <span className="font-12 text-muted">Common Contact</span>
                      <ul className="list-unstyled team-info margin-0 pt-2">
                        <li><img src="../assets/images/xs/avatar3.jpg" alt="Avatar" /></li>
                        <li><img src="../assets/images/xs/avatar4.jpg" alt="Avatar" /></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                  <div className="card ">
                    <div className="card-body">
                      <div className="card-status bg-pink" />
                      <div className="mb-3"> <img src="../assets/images/sm/avatar6.jpg" className="rounded-circle w100" alt="" /> </div>
                      <div className="mb-2">
                        <h5 className="mb-0">Andrew Patrick</h5>
                        <p><a href="https://nsdbytes.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="f0b1919c998a959584989f9d9183b0999e969fde939f9d">[email&nbsp;protected]</a></p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt</span>
                      </div>
                      <span className="font-12 text-muted">Common Contact</span>
                      <ul className="list-unstyled team-info margin-0 pt-2">
                        <li><img src="../assets/images/xs/avatar5.jpg" alt="Avatar" /></li>
                        <li><img src="../assets/images/xs/avatar6.jpg" alt="Avatar" /></li>
                        <li><img src="../assets/images/xs/avatar1.jpg" alt="Avatar" /></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                  <div className="card ">
                    <div className="card-body">
                      <div className="mb-3"> <img src="../assets/images/sm/avatar2.jpg" className="rounded-circle w100" alt="" /> </div>
                      <div className="mb-2">
                        <h5 className="mb-0">Michelle Green</h5>
                        <p><a href="https://nsdbytes.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="f3b2929f9a899696879b9c9e9280b39a9d959cdd909c9e">[email&nbsp;protected]</a></p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt</span>
                      </div>
                      <span className="font-12 text-muted">Common Contact</span>
                      <ul className="list-unstyled team-info margin-0 pt-2">
                        <li><img src="../assets/images/xs/avatar8.jpg" alt="Avatar" /></li>
                        <li><img src="../assets/images/xs/avatar7.jpg" alt="Avatar" /></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                  <div className="card ">
                    <div className="card-body">
                      <div className="mb-3"> <img src="../assets/images/sm/avatar4.jpg" className="rounded-circle w100" alt="" /> </div>
                      <div className="mb-2">
                        <h5 className="mb-0">Mary Schneider</h5>
                        <p><a href="https://nsdbytes.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="cb8aaaa7a2b1aeaebfa3a4a6aab88ba2a5ada4e5a8a4a6">[email&nbsp;protected]</a></p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt</span>
                      </div>
                      <span className="font-12 text-muted">Common Contact</span>
                      <ul className="list-unstyled team-info margin-0 pt-2">
                        <li><img src="../assets/images/xs/avatar2.jpg" alt="Avatar" /></li>
                        <li><img src="../assets/images/xs/avatar7.jpg" alt="Avatar" /></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="addnew" role="tabpanel">
              <div className="card">
                <div className="card-body">
                  <div className="row clearfix">
                    <div className="col-lg-4 col-md-12">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter Name" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                      <div className="form-group">
                        <input type="number" className="form-control" placeholder="Enter Number" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                      <div className="form-group">
                        <input type="email" className="form-control" placeholder="Enter Email" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <textarea type="text" className="form-control" rows={4} defaultValue={"Enter your Address"} />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <input type="file" className="dropify" />
                    </div>
                    <div className="col-lg-12 mt-3">
                      <button type="submit" className="btn btn-primary">Add</button>
                      <button type="submit" className="btn btn-default">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-body">
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                Copyright © 2019 <a href="https://themeforest.net/user/puffintheme/portfolio">PuffinTheme</a>.
              </div>
              <div className="col-md-6 col-sm-12 text-md-right">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item"><a href="https://nsdbytes.com/template/ericssion/doc/index.html">Documentation</a></li>
                  <li className="list-inline-item"><a href="javascript:void(0)">FAQ</a></li>
                  <li className="list-inline-item"><a href="javascript:void(0)" className="btn btn-outline-primary btn-sm">Buy Now</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</div>

    </React.Fragment>
  );
};
export default AppContact;