import GeneralInformation from "../Components/SafetyComplaint/Form";
import ReCAPTCHA from "react-google-recaptcha";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

const SafetyComplaint = () => {
  const [complaintData, setComplaintData] = useState({
    employeeName: "",
    position: "",
    department: "",
    locationOfConcern: "",
    hasSupervisorBeenInformed: "no", 
    typeOfHazardousCondition: "",
    explanationAndRecommendation: "",
    anyEffortsMadeToResolve: "no", 
    effortsMadeDetails: "",
    eSignature: "",
});

  const [loading, setLoading] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`https://api.metrovancouversprayfoam.com/api/safety-complaint`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(complaintData),
      });
      if (response.ok) {
        toast.success("Data submitted successfully");
        setComplaintData({
          employeeName: "",
          position: "",
          department: "",
          locationOfConcern: "",
          hasSupervisorBeenInformed: "no", 
          typeOfHazardousCondition: "",
          explanationAndRecommendation: "",
          anyEffortsMadeToResolve: "no", 
          effortsMadeDetails: "",
          eSignature: "",
      });
        setLoading(false);
      } else {
        console.error("Failed to submit data");
        setLoading(false);
      }
    } catch (err) {
      console.error("There was a problem with the fetch operation:", err);
      toast.error("Couldn't send your report, please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const [captchaCompleted, setCaptchaCompleted] = useState(false);

  function handleCaptcha() {
    setCaptchaCompleted(!captchaCompleted);
  }
  return (
    <div className="mx-[9%] mt-[85px] md:mt-[167px]">
      <h2 className="font-anton font-[800] text-3xl mb-[24px] md:text-4xl">
        Safety and Health Complaint Form
      </h2>
      <form onSubmit={handleSubmit}>
        <GeneralInformation
          complaintData={complaintData} setComplaintData={setComplaintData}
        />
      
        <hr className="my-[52px] border border-gray-500 opacity-20 " />
        <div className="mb-[30px]">
          <input
            type="checkbox"
            name="agreement"
            id="agreement"
            required
            className="mr-2 "
          />
          <label htmlFor="agreement" className="text-gray-800 ">
            I hereby agree that the above information provided is true. This
            action takes the place of your signature.
          </label>
        </div>
        <div className="flex mb-[35px] justify-center md:justify-start">
          <ReCAPTCHA
            sitekey="6LeR-8kpAAAAAFGAmNQStUzI5da6TyOOn4j3DPqg"
            onChange={handleCaptcha}
          />
        </div>
        {captchaCompleted && (
          <button
            type="submit"
            className="text-white mb-[35px] font-semibold hover:opacity-95 border-2 border-black hover:bg-gradient-to-l bg-gradient-to-r from-[#b4a058] to-[#000000] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit Complaint"}
          </button>
        )}
      </form>
      <Toaster />
    </div>
  );
};

export default SafetyComplaint;
