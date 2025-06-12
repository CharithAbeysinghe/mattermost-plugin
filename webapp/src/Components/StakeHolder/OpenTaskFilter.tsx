import React, { useState } from 'react';

const OpenTaskFilter = () => {
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [status, setStatus] = useState('');

    const handleApply = () => {
        // Your filter logic here
        console.log({ fromDate, toDate, status });
    };

    return (
        <div className="filter-section">
            <div className="row">
                <div className="col-sm-4">
                    <div className="input-group">
                        <label className="control-label">Projects</label>
                        <select
                            className="form-control"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="">All</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                            <option value="Pending">Pending</option>
                        </select>
                    </div>
                </div>

                <div className="col-sm-4">
                    <div className="input-group">
                        <label className="control-label">Status</label>
                        <select
                            className="form-control"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="">All</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                            <option value="Pending">Pending</option>
                        </select>
                    </div>
                </div>

                <div className="col-sm-4">
                    <label className="control-label">Total Time Spent : 5h 40m</label>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-sm-12 text-right">
                    <button
                        className="btn btn-primary"
                        onClick={handleApply}
                    >
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OpenTaskFilter;
