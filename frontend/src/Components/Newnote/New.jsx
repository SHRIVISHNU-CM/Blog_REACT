import React from 'react'

function New() {
    return (
        <>
            <div>
                <form>
                    <div className='label'>
                        <span className='label-text'>
                            Topic
                        </span>

                    </div>
                    <input type='text' className='input input-bordered border-success' />
                    <div className='label'>
                        <span>Important Note</span>

                    </div>
                    <input type='text' className='input input-bordered' />
                    <div>
                        <span>Description</span>
                    </div>
                    <input type='text' className='input input-bordered' />
                    <div>
                        <button type='submit'
                            className='btn btn-success text-white'>
                            New Blog
                        </button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default New