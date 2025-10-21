// src/components/scrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Define the GA4 Measurement ID once
const GA_TRACKING_ID = 'G-79GR0S9TR5'; 

function ScrollToTop() {
  // Use the location object to watch for any URL changes
  const location = useLocation();

  useEffect(() => {
    // 1. Scrolls to the top of the page (Original functionality)
    window.scrollTo(0, 0); 
    
    // 2. GA4 Page View Tracking on Route Change
    if (window.gtag) {
        // Send a 'config' call with the current route details. 
        // Google recommends using 'config' inside SPAs for page views.
        window.gtag('config', GA_TRACKING_ID, {
            // Include pathname, search query, and hash for detailed tracking
            'page_path': location.pathname + location.search + location.hash, 
            'page_title': document.title, // Use current document title
        });
    }
  // This dependency array ensures the code block runs anytime the URL changes.
  }, [location.pathname, location.search, location.hash]); 

  return null; // This component doesn't render anything
}

export default ScrollToTop;