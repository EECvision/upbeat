import React from 'react';
import AdminDashboard from '../components/admin/AdminDashboard';
import { fetchFilesStart } from '../redux/files/files.actions';
import { connect } from 'react-redux';

const Admin = () => {
  const { history, match } = this.props;
  return (
    <div className="w-full flex justify-center">
      <div className="absolute w-full max-w-4xl ">
        <button className="bg-black text-green-500 px-6 rounded-full shadow-2xl border border-black" onClick={() => fetchFilesStart()}>Refresh</button>
      </div>
      <AdminDashboard history={history} match={match} />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchFilesStart: () => dispatch(fetchFilesStart())
})

export default connect(null, mapDispatchToProps)(Admin);