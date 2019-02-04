console.log('Starting the background.js file');
if (window.location.pathname === "/packaging/exportPackage.apexp") {
    // jQuery('[id*="ExportPackagePage:UploadPackageForm:PackageDetailsPageBlock:PackageDetailsBlockSection:radioButtonsSections:TypeRadio:0"]').prop("checked", true);
    const radioButton = document.getElementById("ExportPackagePage:UploadPackageForm:PackageDetailsPageBlock:PackageDetailsBlockSection:radioButtonsSections:TypeRadio:0")
    radioButton.setAttribute("checked", true);
    // jQuery('[id*="ExportPackagePage:UploadPackageForm:PackageDetailsPageBlock:PackageDetailsBlockSection:VersionInfoSectionItem:VersionText"]').val(jQuery('[id*="ExportPackagePage:UploadPackageForm:PackageDetailsPageBlock:PackageDetailsBlockSection:j_id26:VersionNumber"]').val());
    const versionNameTextbox = document.getElementById("ExportPackagePage:UploadPackageForm:PackageDetailsPageBlock:PackageDetailsBlockSection:VersionInfoSectionItem:VersionText");
    const versionNumberTextbox = document.getElementById("ExportPackagePage:UploadPackageForm:PackageDetailsPageBlock:PackageDetailsBlockSection:j_id26:VersionNumber");
    versionNameTextbox.value = versionNumberTextbox.value;
} else if (window.location.pathname === "/packagingSetupUI/ipLanding.app"){
    document.getElementById("mappingOptionAll").click();
} else if (window.location.pathname === "/_ui/core/mfpackage/install/InstallPackageLandingPage") {
    alert("Please open the debugger");
    debugger;
    //jQuery('[id*="profileMappingAll"]').prop("checked", true);
    //jQuery('.selected').removeClass("selected");
    //jQuery('[id*="mappingOptionAll"]').addClass("selected");
    document.getElementById("mappingOptionAll").click();//This line replaced the line // jQuery('[id*="mappingOptionAll"]').click();
}else if(window.location.pathname.includes("/033")){
    debugger;
}
console.log('Finished the background.js file');