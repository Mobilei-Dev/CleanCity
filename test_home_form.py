from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# Start Chrome browser
service = Service()  # Optional: specify path to chromedriver if needed
driver = webdriver.Chrome(service=service)

try:
    driver.get("https://mobilei-lungiswa-hidaya.netlify.app")

    # Wait for the form to load
    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.NAME, "form"))
    )

    # Fill out the form
    driver.find_element(By.ID, "home-name").send_keys("Mobilei Amdany")
    driver.find_element(By.ID, "home-email").send_keys("jamdanymobilei8@gmail.com")

    Select(driver.find_element(By.ID, "home-location")).select_by_visible_text("Kiambu")
    Select(driver.find_element(By.ID, "home-waste")).select_by_visible_text("Organic")

    driver.find_element(By.ID, "home-date").send_keys("07/20/2025")
    driver.find_element(By.ID, "home-desc").send_keys("Please pick up near the blue bin.")

    # Submit the form
    driver.find_element(By.CSS_SELECTOR, 'button[type="submit"]').click()

    # Optional: wait for success message
    WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, "success-message"))
    )
    print("✅ Form submitted successfully!")

except Exception as e:
    print("❌ Test failed:", str(e))
finally:
    time.sleep(2)
    driver.quit()
