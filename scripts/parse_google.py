import urllib.request
import re
from bs4 import BeautifulSoup

url = 'https://www.google.com/search?kgmid=/g/11swnb0vxh&q=Mold+Recovery+Plus'
req = urllib.request.Request(
    url,
    headers={
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9'
    }
)

try:
    html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')
    soup = BeautifulSoup(html, 'html.parser')
    text = soup.get_text(separator=' ')
    
    # print some basic findings
    print("Page title:", soup.title.string if soup.title else "No title")
    
    # search for rating
    ratings = re.findall(r'(\d\.\d)\s*(?:stars|out of 5|\★)', text)
    print("Ratings found:", set(ratings))
    
    # reviews count
    rev_counts = re.findall(r'(\d+)\s*(?:Google\s*)?reviews', text, re.I)
    print("Reviews counts:", set(rev_counts))
    
    # snippets with Mold Recovery Plus
    lines = [line.strip() for line in text.split('\n') if len(line.strip()) > 30]
    for line in lines[:30]:
        if any(k in line.lower() for k in ['mold', 'jarnis', 'burlington', 'review', 'rating']):
            print("Snippet:", line[:150])

except Exception as e:
    print("Error:", e)
