import './Sidebar.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'

const Sidebar = () => {

  const [extended, setExtended] = useState(false);


  return (
    <div className='sidebar'>
      <div className='top'>
        <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt='' />
        <div className='new-chat'>
          <img src={assets.plus_icon} alt='' />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ?
          <div className='recent'><p className='recent-title'>Recent</p>
            <div className='recent-entry'>
              <img src={assets.message_icon} alt='' />
              <p>What is react..</p>
            </div>
          </div>
          : null}
      </div>
      <div className='bottom'>
        <div className='bottom-item recent-entry'>
          <img src={assets.question_icon} alt='' />
          {/* <lord-icon
            src="https://cdn.lordicon.com/ojnjgkun.json"
            trigger="hover"
            colors="primary:#242424">
          </lord-icon> */}
          {extended ? <p>Help</p> : null}
        </div>
        <div className='bottom-item recent-entry'>
          <img src={assets.history_icon} alt='' />
          {/* <lord-icon
            src="https://cdn.lordicon.com/dafdkyyt.json"
            trigger="hover"
            colors="primary:#242424">
          </lord-icon> */}
          {extended ? <p>Activity</p> : null}
        </div>
        <div className='bottom-item recent-entry'>
          <img src={assets.setting_icon} alt='' />
          {/* <lord-icon
            src="https://cdn.lordicon.com/ifsxxxte.json"
            trigger="hover"
            colors="primary:#242424"
            state="hover-cog-4">
          </lord-icon> */}
          {extended ? <p>Settings</p> : null}
        </div>

      </div>
    </div>
  )
}

export default Sidebar