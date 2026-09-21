const form = document.getElementById('appForm');
const fields = {
  appName: document.getElementById('appName'),
  bundleId: document.getElementById('bundleId'),
  version: document.getElementById('version'),
  platform: document.getElementById('platform'),
  minimumOs: document.getElementById('minimumOs'),
  ipaFile: document.getElementById('ipaFile'),
  fileSize: document.getElementById('fileSize'),
  bundlePath: document.getElementById('bundlePath'),
  archiveType: document.getElementById('archiveType')
};

const preview = {
  appName: document.getElementById('previewAppName'),
  bundleId: document.getElementById('previewBundleId'),
  platform: document.getElementById('previewPlatform'),
  version: document.getElementById('previewVersion'),
  minimumOs: document.getElementById('previewMinimumOs'),
  ipaFile: document.getElementById('previewIpaFile'),
  fileSize: document.getElementById('previewFileSize'),
  bundlePath: document.getElementById('previewBundlePath'),
  archiveType: document.getElementById('previewArchiveType')
};

function updatePreview() {
  preview.appName.textContent = fields.appName.value.trim() || 'Unnamed App';
  preview.bundleId.textContent = fields.bundleId.value.trim() || 'com.example.app';
  preview.platform.textContent = fields.platform.value || 'iOS';
  preview.version.textContent = fields.version.value.trim() || '1.0';
  preview.minimumOs.textContent = fields.minimumOs.value.trim() || '1.0';
  preview.ipaFile.textContent = fields.ipaFile.value.trim() || 'app.ipa';
  preview.fileSize.textContent = fields.fileSize.value.trim() || '0 MB';
  preview.bundlePath.textContent = fields.bundlePath.value.trim() || 'Payload/App.app';
  preview.archiveType.textContent = fields.archiveType.value || 'App Store Package';
}

Object.values(fields).forEach((field) => {
  field.addEventListener('input', updatePreview);
  field.addEventListener('change', updatePreview);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  updatePreview();

  const button = event.submitter || form.querySelector('button[type="submit"]');
  const original = button.textContent;
  button.textContent = 'Created';
  button.disabled = true;

  window.setTimeout(() => {
    button.textContent = original;
    button.disabled = false;
  }, 1200);
});

updatePreview();
