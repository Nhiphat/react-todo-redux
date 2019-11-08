import React from 'react';
import logo from './logo.svg';
import TaskForm from './components/TaskForm'

class App extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div class="row">
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <TaskForm></TaskForm>
          </div>
          <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button type="button" class="btn btn-primary">
              <span class="fa fa-plus mr-5"></span>Thêm Công Việc
                </button>
            <div class="row mt-20">
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Nhập từ khóa..." />
                  <span class="input-group-btn">
                    <button class="btn btn-primary" type="button">
                      <span class="fa fa-search mr-5"></span>Tìm
                            </button>
                  </span>
                </div>
              </div>
              <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div class="dropdown">
                  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Sắp Xếp <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li>
                      <a role="button">
                        <span class="fa fa-sort-alpha-asc pr-5">
                          Tên A-Z
                                                </span>
                      </a>
                    </li>
                    <li>
                      <a role="button">
                        <span class="fa fa-sort-alpha-desc pr-5">
                          Tên Z-A
                                                </span>
                      </a>
                    </li>
                    <li role="separator" class="divider"></li>
                    <li><a role="button">Trạng Thái Kích Hoạt</a></li>
                    <li><a role="button">Trạng Thái Ẩn</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row mt-15">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table class="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th class="text-center">STT</th>
                      <th class="text-center">Tên</th>
                      <th class="text-center">Trạng Thái</th>
                      <th class="text-center">Hành Động</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td>
                        <input type="text" class="form-control" />
                      </td>
                      <td>
                        <select class="form-control">
                          <option value="-1">Tất Cả</option>
                          <option value="0">Ẩn</option>
                          <option value="1">Kích Hoạt</option>
                        </select>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Học lập trình</td>
                      <td class="text-center">
                        <span class="label label-success">
                          Kích Hoạt
                                                </span>
                      </td>
                      <td class="text-center">
                        <button type="button" class="btn btn-warning">
                          <span class="fa fa-pencil mr-5"></span>Sửa
                                        </button>
                        &nbsp;
                                        <button type="button" class="btn btn-danger">
                          <span class="fa fa-trash mr-5"></span>Xóa
                                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;
