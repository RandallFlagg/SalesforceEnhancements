
            if(window.location.pathname === "/packaging/exportPackage.apexp"){
				
				jQuery('[id*="ExportPackagePage:UploadPackageForm:PackageDetailsPageBlock:PackageDetailsBlockSection:radioButtonsSections:TypeRadio:0"]').prop("checked", true);

jQuery('[id*="ExportPackagePage:UploadPackageForm:PackageDetailsPageBlock:PackageDetailsBlockSection:VersionInfoSectionItem:VersionText"]').val(jQuery('[id*="ExportPackagePage:UploadPackageForm:PackageDetailsPageBlock:PackageDetailsBlockSection:j_id26:VersionNumber"]').val());
			} 
			
			if(window.location.pathname === "/_ui/core/mfpackage/install/InstallPackageLandingPage"){
			//jQuery('[id*="profileMappingAll"]').prop("checked", true);
			//jQuery('.selected').removeClass("selected");
			//jQuery('[id*="mappingOptionAll"]').addClass("selected");
			jQuery('[id*="mappingOptionAll"]').click();
			}
			
        
   