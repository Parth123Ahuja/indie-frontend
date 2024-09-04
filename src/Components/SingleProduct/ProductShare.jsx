export default function ProductShare(imageUrl, productLink, platform) {
    let shareUrl = "";
  
    switch (platform) {
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodeURIComponent(
          "Check out this product: " + productLink + "\n" + imageUrl
        )}`;
        break;
  
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          productLink
        )}&quote=${encodeURIComponent("Check out this product!")}&picture=${encodeURIComponent(imageUrl)}`;
        break;
  
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          productLink
        )}&summary=${encodeURIComponent("Check out this product!")}`;
        break;
  
      default:
        break;
    }
  
    if (shareUrl) {
      window.open(shareUrl, "_blank");
    }
  }
  