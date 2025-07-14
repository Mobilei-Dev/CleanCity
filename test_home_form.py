from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

driver = webdriver.Chrome()

try:
    driver.get("https://mobilei-lungiswa-hidaya.netlify.app")
    wait = WebDriverWait(driver, 10)

    time.sleep(5)  # Let JS/React render everything
    print("🔍 Dumping partial HTML:")
    print(driver.page_source[:1500])  # First 1500 characters of visible HTML

    print("⌛ Waiting for full name input by ID...")
    full_name_input = wait.until(
        EC.visibility_of_element_located((By.ID, "home-name"))
    )

    print("✅ Input found! Typing...")
    full_name_input.click()
    full_name_input.send_keys("Mobilei Amdany")

    print("✅ Full name entered successfully.")

except Exception as e:
    print("❌ Error occurred:")
    print(str(e))

finally:
    time.sleep(3)
    driver.quit()
