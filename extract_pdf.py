import pdfplumber
import os

def extract_pdf_text():
    # Try different possible paths
    paths_to_try = [
        "Arun_Graphic Designer.pdf",
        r"e:\Arun\Portfolio\Arun_Graphic Designer.pdf",
        "Arun_Kavanekar_Resume.pdf"
    ]
    
    print("Current directory:", os.getcwd())
    print("Files in directory:")
    for file in os.listdir("."):
        if file.endswith(".pdf"):
            print(f"  {file}")
    
    for pdf_path in paths_to_try:
        if os.path.exists(pdf_path):
            print(f"\nFound PDF at: {pdf_path}")
            try:
                with pdfplumber.open(pdf_path) as pdf:
                    text = ""
                    for page_num, page in enumerate(pdf.pages, 1):
                        page_text = page.extract_text()
                        if page_text:
                            text += f"\n--- PAGE {page_num} ---\n"
                            text += page_text + "\n"
                    
                    print("PDF Text Content:")
                    print("=" * 60)
                    print(text)
                    return text
                    
            except Exception as e:
                print(f"Error reading PDF {pdf_path}: {e}")
        else:
            print(f"PDF not found at: {pdf_path}")
    
    print("No PDF file found in any of the expected locations")
    return None

if __name__ == "__main__":
    extract_pdf_text()