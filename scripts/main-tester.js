const passwordInput = document.getElementById("password-input");
const strengthLabel = document.getElementById("strength-label");
const strengthFill = document.getElementById("strength-fill");
const criteriaList = document.getElementById("criteria-list");

const criteria = {
  length: function (value) {
    return value.length >= 12;
  },
  upper: function (value) {
    return /[A-Z]/.test(value);
  },
  lower: function (value) {
    return /[a-z]/.test(value);
  },
  number: function (value) {
    return /[0-9]/.test(value);
  },
  symbol: function (value) {
    return /[^A-Za-z0-9]/.test(value);
  },
};

function getStrengthLabel(score) {
  if (score <= 1) {
    return { text: "Muito fraca", color: "#b00020", width: "20%" };
  }
  if (score <= 3) {
    return { text: "Media", color: "#b7791f", width: "60%" };
  }
  return { text: "Forte", color: "#2f8f6b", width: "100%" };
}

function updateTester(value) {
  let score = 0;

  Object.keys(criteria).forEach(function (key) {
    const ruleMatch = criteria[key](value);
    const item = criteriaList.querySelector(`[data-rule="${key}"]`);

    if (item) {
      item.classList.toggle("ok", ruleMatch);
    }

    if (ruleMatch) {
      score += 1;
    }
  });

  const strength = getStrengthLabel(score);
  strengthLabel.textContent = strength.text;
  strengthFill.style.width = strength.width;
  strengthFill.style.backgroundColor = strength.color;
}

if (passwordInput) {
  passwordInput.addEventListener("input", function (event) {
    updateTester(event.target.value);
  });
}
