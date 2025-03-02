import React, { useState } from "react";
import "./DailyTask.css";

const DailyTask = () => {
  const [formData, setFormData] = useState({
    Date: "",
    Team_No: "",
    Name: "",
    Employee_ID: "",
    No_of_calls: "",
    designation: "",
    No_of_Hiring: "",
    Feed_post_LinkJob_Post: "",
    Feed_post_LinkSpecific_one: "",
    Updated_in_Group: false,
    Updated_the_Sheet: false,
    Update_email_sent: false,
    Attended_the_meet: false,
    Mention_any_additionalTask_you_want_to_add: "",
    Any_issues_or_ideas_you_would_like_to_share: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleToggleChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form to initial state
    setFormData({
      Date: "",
      Team_No: "",
      Name: "",
      Employee_ID: "",
      No_of_calls: "",
      designation: "",
      No_of_Hiring: "",
      Feed_post_LinkJob_Post: "",
      Feed_post_LinkSpecific_one: "",
      Updated_in_Group: false,
      Updated_the_Sheet: false,
      Update_email_sent: false,
      Attended_the_meet: false,
      Mention_any_additionalTask_you_want_to_add: "",
      Any_issues_or_ideas_you_would_like_to_share: "",
    });
  
    setTimeout(() => {
      setIsSubmitted(false);
    }, 400000);
  };

  const handleCancel = () => {
    setFormData({
      Date: "",
      Team_No: "",
      Name: "",
      Employee_ID: "",
      No_of_calls: "",
      designation: "",
      No_of_Hiring: "",
      Feed_post_LinkJob_Post: "",
      Feed_post_LinkSpecific_one: "",
      Updated_in_Group: false,
      Updated_the_Sheet: false,
      Update_email_sent: false,
      Attended_the_meet: false,
      Mention_any_additionalTask_you_want_to_add: "",
      Any_issues_or_ideas_you_would_like_to_share: "",
    });
  };

  return (
<div className={`layout-container relative ${isSubmitted ? ' bg-[#7e7e7e]' : 'form layout-container relative'}`}>

        <div className="form-container">
          <div className="form-content layout-container relative">
            <h1 onSubmit={handleSubmit} className={`relative ${isSubmitted ? 'blur  ' : 'form'} z-10`}>Daily Task Form</h1>
            <form onSubmit={handleSubmit} className={`relative ${isSubmitted ? 'blur h-[600px] bg-red-400' : 'form layout-container relative'} z-10`}>
              <div className="form-row md">
                <input
                  type="text"
                  name="Date"
                  value={formData.Date}
                  onChange={handleInputChange}
                  placeholder="Date"
                  required
                />
                <input
                  type="text"
                  name="Team_No"
                  value={formData.Team_No}
                  onChange={handleInputChange}
                  placeholder="Team No"
                  required
                />
              </div>
              <div className="form-row md">
                <input
                  type="text"
                  name="Name"
                  value={formData.Name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  required
                />
                <input
                  type="text"
                  name="Employee_ID"
                  value={formData.Employee_ID}
                  onChange={handleInputChange}
                  placeholder="Employee ID"
                  required
                />
              </div>
            <div className="form-row md">
              <input
                type="text"
                name="No_of_calls"
                value={formData.No_of_calls}
                onChange={handleInputChange}
                placeholder="No of Calls"
                required
              />
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleInputChange}
                placeholder="Designation"
                required
              />
            </div>
            <div className="form-row md">
              <input
                type="text"
                name="No_of_Hiring"
                value={formData.No_of_Hiring}
                onChange={handleInputChange}
                placeholder="No of Hiring"
                required
              />
              <input
                type="text"
                name="Feed_post_LinkJob_Post"
                value={formData.Feed_post_LinkJob_Post}
                onChange={handleInputChange}
                placeholder="Feed post Link Job Post"
                required
              />
            </div>
            <div className="form-row md">
              <input
                type="text"
                name="Feed_post_LinkSpecific_one"
                value={formData.Feed_post_LinkSpecific_one}
                onChange={handleInputChange}
                placeholder="Feed post Link Specific one"
                required
              />
              </div>
              <div className="grid grid-cols-2 gap-6">
  {[
    { id: 'Updated_in_Group', label: 'Updated in Group' },
    { id: 'Updated_the_Sheet', label: 'Updated the Sheet' },
    { id: 'Update_email_sent', label: 'Update email sent' },
    { id: 'Attended_the_meet', label: 'Attended the meet' },
  ].map((item) => (
    <div
      key={item.id}
      className="toggle-container flex items-center space-x-4 cursor-pointer"
      onClick={() =>
        handleToggleChange({
          target: {
            name: item.id,
            checked: !formData[item.id],
          },
        })
      }
    >
      <label htmlFor={item.id} className="text-gray-700">
        {item.label}
      </label>

      <input
        type="checkbox"
        name={item.id}
        id={item.id}
        checked={formData[item.id]}
        readOnly
        className="opacity-0 absolute"
      />

      <div
        className={`w-6 h-6 shrink-0 rounded-full border-2 flex items-center justify-center ${
          formData[item.id] ? 'bg-blue-500 border-blue-500' : 'border-gray-400'
        }`}
      >
        {formData[item.id] && (
          <svg
            className="w-4 h-4 shrink-0  text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 16.2l-4.2-4.2-1.4 1.4L9 19l12-12-1.4-1.4z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>

      <span>{formData[item.id] ? 'Yes' : 'No'}</span>
    </div>
  ))}
</div>

              <input
                className="additionalTask"
                type="text"
                name="Mention_any_additionalTask_you_want_to_add"
                value={formData.Mention_any_additionalTask_you_want_to_add}
                onChange={handleInputChange}
                placeholder="Mention any additional Task you want to add"
                required
              />
            
            <div className="form-row md">
              <input
                className="additionalTask"
                type="text"
                name="Any_issues_or_ideas_you_would_like_to_share"
                value={formData.Any_issues_or_ideas_you_would_like_to_share}
                onChange={handleInputChange}
                placeholder="Any issues or ideas you would like to share"
                required
              />
            </div>
            <div className="form-actions relative lg:bottom-1">
              <button
                type="button"
                onClick={handleCancel}
                className="cancel-button"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="submit-button"
              >
                Next
              </button>
            </div>
          </form>
          {isSubmitted && (
    <div className="absolute inset-0 flex h-screen items-center justify-center bg-black/30 z-20">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Form Successfully Submitted!</h2>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
          Close
        </button>
      </div>
    </div>
  )}
        </div>
      </div>
        
    </div>
  );
};

export default DailyTask;