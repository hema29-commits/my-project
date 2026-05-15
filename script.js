const form = document.getElementById('admissionForm');
const formCard = document.getElementById('formCard');
const successMsg = document.getElementById('successMsg');

function showError(id, errId, show) {
  const input = document.getElementById(id);
  const err = document.getElementById(errId);
  if (show) {
    input && input.classList.add('error');
    err && err.classList.add('show');
  } else {
    input && input.classList.remove('error');
    err && err.classList.remove('show');
  }
}

function validateEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function validatePhone(v) {
  return /^[\d\s\+\-\(\)]{7,15}$/.test(v.trim());
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;

  const fn = document.getElementById('firstName').value.trim();
  const ln = document.getElementById('lastName').value.trim();
  const em = document.getElementById('email').value.trim();
  const ph = document.getElementById('phone').value.trim();
  const db = document.getElementById('dob').value;
  const co = document.getElementById('course').value;
  const qu = document.getElementById('qualification').value;
  const tc = document.getElementById('terms').checked;

  if (!fn) { showError('firstName', 'firstNameErr', true); valid = false; }
  else showError('firstName', 'firstNameErr', false);

  if (!ln) { showError('lastName', 'lastNameErr', true); valid = false; }
  else showError('lastName', 'lastNameErr', false);

  if (!validateEmail(em)) { showError('email', 'emailErr', true); valid = false; }
  else showError('email', 'emailErr', false);

  if (!validatePhone(ph)) { showError('phone', 'phoneErr', true); valid = false; }
  else showError('phone', 'phoneErr', false);

  if (!db) { showError('dob', 'dobErr', true); valid = false; }
  else showError('dob', 'dobErr', false);

  if (!co) { showError('course', 'courseErr', true); valid = false; }
  else showError('course', 'courseErr', false);

  if (!qu) { showError('qualification', 'qualErr', true); valid = false; }
  else showError('qualification', 'qualErr', false);

  if (!tc) {
    document.getElementById('termsErr').classList.add('show');
    valid = false;
  } else {
    document.getElementById('termsErr').classList.remove('show');
  }

  if (valid) {
    formCard.style.display = 'none';
    successMsg.classList.add('show');
  }
});

// Clear error on input
document.querySelectorAll('.form-input, .form-select').forEach(el => {
  el.addEventListener('input', () => {
    el.classList.remove('error');
    const errId = el.id + 'Err';
    const errEl = document.getElementById(errId);
    if (errEl) errEl.classList.remove('show');
  });
});
