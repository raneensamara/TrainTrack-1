document.addEventListener("DOMContentLoaded", function () {
  // ✅ Save fallback payload
  try {
    const fullData = JSON.parse(localStorage.getItem("finalWizardData"));
    if (fullData) {
      const fallbackPayload = {
        subjects: fullData.selectedSubjectIds || [],
        technical_skills: fullData.selectedTechnicalSkills || [],
        non_technical_skills: fullData.selectedNonTechnicalSkills || [],
        advanced_preferences: {
          training_modes: fullData.trainingModeId ? [parseInt(fullData.trainingModeId)] : [],
          company_sizes: fullData.companySizeId ? [parseInt(fullData.companySizeId)] : [],
          industries: fullData.industryIds || []
        },
        previous_fallback_ids: [],
        is_fallback: true
      };
      localStorage.setItem("previousFallbackPayload", JSON.stringify(fallbackPayload));
    }
  } catch (err) {
    console.warn("⚠️ Could not prepare fallbackPayload from finalWizardData", err);
  }

  // ✅ Add Improve Button if Fallback Skipped
  const fallbackTriggered = localStorage.getItem("fallbackTriggered");
  const container = document.getElementById("positionResultsContainer");

  if (fallbackTriggered === "true" && container) {
    const improveDiv = document.createElement("div");
    improveDiv.innerHTML = `
      <div style="text-align: center; margin-top: 2rem;">
        <button id="improveBtn" style="
          background: linear-gradient(90deg, #8e2de2, #4a00e0);
          color: white;
          border: none;
          padding: 14px 28px;
          font-size: 16px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          cursor: pointer;
          transition: transform 0.2s ease-in-out;
        ">✨ Improve My Selections</button>
      </div>
    `;
    container.appendChild(improveDiv);

    document.getElementById("improveBtn").addEventListener("click", () => {
      localStorage.removeItem("fallbackTriggered");
      window.location.href = "/traintrack/fallback/improve";
    });
  }
});
