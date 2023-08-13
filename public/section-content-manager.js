import jobs from '../data.json' assert { type: 'json' };

//Reference Section Element
const Section = document.getElementById('section');

//Export Allows this function to be imported into other scripts.
export function UpdateSectionContent(sectionName) {
  Section.innerHTML = GetSectionContent(sectionName);
}

//Get Section Content based on the SectionName
// function GetSectionContent(sectionName) {
//   if (sectionName == 'employer-view-design') return EmployerViewDesignContent();
//   else if (sectionName == 'main-view-design') return MainViewContent();
//   else if (sectionName == 'applicant-profile')
//     return ProfileViewApplicantContent();
//   else if (sectionName == 'employer-profile')
//     return ProfileViewEmployerContent();
//   else if (sectionName == 'submit') return SubmitFileContent();
//   else if (sectionName == 'job-edit-details-view')
//     return JobEditDetailsViewContent();
//   else if (sectionName == 'job-details-view') return JobDetailsViewContent();
//   else return SectionNotFoundContent();
// }

function GetSectionContent(sectionName) {
  switch (sectionName) {
    case 'submit':
      return SubmitFileContent();
    case 'employer-view-design':
      return EmployerViewDesignContent();
    case 'main-view-design':
      return MainViewContent();
    case 'applicant-profile':
      return ProfileViewApplicantContent();
    case 'employer-profile':
      return ProfileViewEmployerContent();
    case 'job-edit-details-view':
      return JobEditDetailsViewContent();
    case 'job-details-view':
      return JobDetailsViewContent();
    default:
      return SectionNotFoundContent();
  }
}

//Section Template Functions - Returning html for that section.
function SubmitFileContent() {
  // File Load View Design
  return `
    <a href="#main-view-design" class="load-view-back-btn nav-link green-btn">Back</a>
    <div class="section-nav-load-view">
        <div class='file-loader'>File Loader</div>
        <a href="#main-view-design" class="load-view-link nav-link green-btn">Submit</a>
    </div>
    `;
}

function MainViewContent() {
  const jobRows = jobs
    .map(
      (job) => `
      <tr>
        <td>${job.category}</td>
        <td>${job.role}</td>
        <td>${job.location}</td>
        <td>${job.industry}</td>
        <td>${job.func}</td>
        <td>${job.title}</td>
        <td>${job.experience}</td>
        <td>${job.salary}</td>
        <td>
          <a href="#job-details-view" class="job-details-btn nav-link green-btn">Details</a>
        </td>
      </tr>
    `
    )
    .join('');

  // Main View Design
  return `
      <div class="main-view-button-container">
        <a href="#employer-profile" class="main-view-btn nav-link green-btn">Employer Profile</a>
        <a href="#applicant-profile" class="main-view-btn nav-link green-btn">Applicant Profile</a>
      </div>
          
      <div class="main-view-design-table">
        <table>
          <tr>
            <th>Role Category</th>
            <th>Role</th>
            <th>Location</th>
            <th>Industry</th>
            <th>Function</th>
            <th>Job Title</th>
            <th>Experience</th>
            <th>Salary</th>
            <th>Details/Apply</th>
          </tr>
          ${jobRows}
        </table>
      </div>
    `;
}

function EmployerViewDesignContent() {
  const jobRows = jobs
    .map(
      (job) => `
      <tr>
        <td>${job.category}</td>
        <td>${job.role}</td>
        <td>${job.location}</td>
        <td>${job.industry}</td>
        <td>${job.func}</td>
        <td>${job.title}</td>
        <td>${job.experience}</td>
        <td>${job.salary}</td>
        <td>
          <a href="#job-details-view" class="job-details-btn nav-link green-btn">Details</a>
        </td>
      </tr>
    `
    )
    .join('');
  // Employer View Design
  return `
  <!-- EMPLOYER VIEW DESIGN -->
  <div class="employer-view-container">
    <div class="employer-view-container-left">
      <img
        id="logo"
        class="logo"
        src="DN-Logo.png"
        alt="Digital Native Logo"
      />
    </div>
    <div class="employer-view-container-middle">
      <h2>Welcome: Employer Name</h2>
    </div>
    <div class="employer-view-container-right">
      <div class="employer-view-right-btn">
        <a
          href="-"
          class="employer-view-btn nav-link green-btn"
          >Login</a
        >
        <a
          href="#employer-profile"
          class="employer-view-btn nav-link green-btn"
          >Profile</a
        >
      </div>
      <div class="employer-view-right-avatar">
        <img
          id="avatar"
          class="avatar"
          src="avatar-placeholder.jpeg"
          alt="avatar-placeholder"
        />
      </div>
    </div>
  </div>

  <div class="main-view-design-table">
    <table>
      <tr>
        <th>Role Category</th>
        <th>Role</th>
        <th>Location</th>
        <th>Industry</th>
        <th>Function</th>
        <th>Job Title</th>
        <th>Experience</th>
        <th>Salary</th>
        <th>Details/Apply</th>
      </tr>
      ${jobRows}
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <a
            href="#job-edit-details-view"
            class="job-details-btn nav-link green-btn"
            >Add New</a
          >
        </td>
      </tr>
    </table>
  </div>
    `;
}

function ProfileViewEmployerContent() {
  // Profile View Employer
  return `
    <!-- EMPLOYER VIEW DESIGN -->
    <div class="profile-view-container">
      <div class="profile-view-container-left">
        <div class="profile-welcome">Welcome: Employer Name</div>
        <a
          href="#employer-view-design"
          class="profile-view-back-btn nav-link green-btn"
          >Back</a
        >
      </div>
      <div class="profile-view-container-right">
        <img
          id="avatar"
          class="avatar"
          src="avatar-placeholder.jpeg"
          alt="avatar-placeholder"
        />
      </div>
    </div>

    <div class="profile-view-design-table">
    <table>
    <tr>
      <th>Company Name</th>
      <td><input type="text" name="companyName" /></td>
    </tr>
    <tr>
      <th>Company Website</th>
      <td><input type="text" name="companyWebsite" /></td>
    </tr>
    <tr>
      <th>Employer Logo:</th>
      <td><input type="file" name="employerLogo" /></td>
    </tr>
    <tr>
      <th>Employer Name:</th>
      <td><input type="text" name="employerName" /></td>
    </tr>
    <tr>
      <th>Phone Number</th>
      <td><input type="text" name="phoneNumber" /></td>
    </tr>
    <tr>
      <th>Email</th>
      <td><input type="email" name="email" /></td>
    </tr>
    <tr>
      <th>Profile Picture</th>
      <td><input type="file" name="employerProfilePic" /></td>

    </tr>
  </table>
    </div>
    `;
}

function ProfileViewApplicantContent() {
  // Applicant View Design
  return `
    <!-- APPLICANT VIEW DESIGN -->
    <div class="profile-view-container">
      <div class="profile-view-container-left">
        <div class="profile-welcome">Welcome: Applicant Name</div>
        <a
          href="#main-view-design"
          class="profile-view-back-btn nav-link green-btn"
          >Back</a
        >
      </div>
      <div class="profile-view-container-right">
        <img
          id="avatar"
          class="avatar"
          src="avatar-placeholder.jpeg"
          alt="avatar-placeholder"
        />
      </div>
    </div>

    <div class="profile-view-design-table">
    <table>
    <tr>
      <th>Applicant Name:</th>
      <td><input type="text" name="applicantName" /></td>
    </tr>
    <tr>
      <th>Phone Number:</th>
      <td><input type="text" name="phoneNumber" /></td>
    </tr>
    <tr>
      <th>Email:</th>
      <td><input type="email" name="email" /></td>
    </tr>
    <tr>
      <th>Profile Picture:</th>
      <td><input type="file" name="applicantProfilePic" /></td>
    </tr>
    <tr>
      <th>CV:</th>
      <td><input type="file" name="applicantCV" /></td>
    </tr>
  </table>
    </div>
    `;
}

function JobEditDetailsViewContent() {
  const roleCategories = Array.from(new Set(jobs.map((job) => job.category)));

  const roleCategoryOptions = roleCategories
    .map((category) => `<option value="${category}">${category}</option>`)
    .join('');

  const industries = Array.from(new Set(jobs.map((job) => job.industry)));

  const industryOptions = industries
    .map((industry) => `<option value="${industry}">${industry}</option>`)
    .join('');
  // Add/Edit Job View Design
  return `
    <div class="profile-view-container">
    <div class="profile-view-container-left">
      <div class="profile-welcome">Welcome: Employer Name</div>
      <a
        href="#employer-view-design"
        class="add-edit-btn nav-link green-btn"
        >Save</a
      >
      <a
        href="#main-view-design"
        class="add-edit-btn nav-link green-btn"
        >Back</a
      >
    </div>
    <div class="profile-view-container-right">
      <img
        id="avatar"
        class="avatar"
        src="avatar-placeholder.jpeg"
        alt="avatar-placeholder"
      />
    </div>
  </div>

  <div class="profile-view-design-table">

  <table>
  <tr>
    <th>Company Name:</th>
    <td><input type="text" name="companyName" /></td>
  </tr>
  <tr>
    <th>Role Category:</th>
    <td>
    <select name="roleCategory">
    <option value="" selected disabled>Select Role Category</option>
    ${roleCategoryOptions}
  </select>
    </td>
  </tr>
  <tr>
    <th>Location:</th>
    <td><input type="text" name="location" /></td>
  </tr>
  <tr>
    <th>Industry:</th>
    <td>
    <select name="industry" multiple>
    ${industryOptions}
  </select>
  </td>
  </tr>
  <tr>
    <th>Function:</th>
    <td><input type="text" name="function" /></td>
  </tr>
  <tr>
    <th>Title:</th>
    <td><input type="file" name="applicantName" /></td>
  </tr>
  <tr>
    <th>Experience:</th>
    <td><input type="text" name="experience" /></td>
  </tr>
  <tr>
    <th>Salary:</th>
    <td><input type="text" name="salary" /></td>
  </tr>
</table>
  </div>`;
}

function JobDetailsViewContent() {
  const roleCategories = Array.from(new Set(jobs.map((job) => job.category)));

  const roleCategoryOptions = roleCategories
    .map((category) => `<option value="${category}">${category}</option>`)
    .join('');

  const industries = Array.from(new Set(jobs.map((job) => job.industry)));

  const industryOptions = industries
    .map((industry) => `<option value="${industry}">${industry}</option>`)
    .join('');

  //Display Job View Design Applicant
  return `
    <!-- ADD/EDIT JOB VIEW DESIGN -->
    <div class="profile-view-container">
      <div class="profile-view-container-left">

        <a
          href="#employer-main-design"
          class="add-edit-btn nav-link green-btn"
          >Apply</a
        >
        <a
          href="#main-view-design"
          class="add-edit-btn nav-link green-btn"
          >Back</a
        >
      </div>

    </div>

    <div class="profile-view-design-table">
      <table>
        <tr>
          <th>Company Name:</th>
          <td>Company Name</td>
        </tr>
        <tr>
          <th>Role Category:</th>
          <td>
          <select name="roleCategory">
          <option value="" selected disabled>Select Role Category</option>
          ${roleCategoryOptions}
        </select>
          </td>
        </tr>
        <tr>
          <th>Location:</th>
          <td>Location</td>
        </tr>
        <tr>
          <th>Industry:</th>
          <td>
          <select name="industry" multiple>
          ${industryOptions}
        </select>
        </td>
        </tr>
        <tr>
          <th>Function:</th>
          <td>Function</td>
        </tr>
        <tr>
          <th>Title:</th>
          <td><input type="file" name="applicantName" /></td>
        </tr>
        <tr>
          <th>Experience:</th>
          <td>Experience</td>
        </tr>
        <tr>
          <th>Salary:</th>
          <td>Salary</td>
        </tr>
      </table>
    </div>`;
}

function SectionNotFoundContent() {
  return `
  <div class="section-nav-load-view">
      <div class='file-loader'>No Content Found</div>
      <a href="#main-view-design" class="load-view-link nav-link green-btn">Home Page</a>
  </div>
  `;
}
