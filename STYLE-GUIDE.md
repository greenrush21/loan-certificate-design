# Loan Certificate Style Guide

## Color Palette

### Primary Colors
- Navy Blue: `#2A3B4D` - Headers, borders, and main text
- Cream: `#F5F3EB` - Background and light text
- Gold: `#C4A86F` - Accents and decorative elements

### Secondary Colors
- Success Green: `#8AA07D` - Approval indicators
- Warning Red: `#B33A3A` - Important notices

## Typography

### Fonts
1. **Playfair Display** (Headings)
   - Certificate title
   - Major section headers
   - Loan amount display

2. **Lato** (Body Text)
   - General information
   - Details and descriptions
   - Navigation elements

3. **Roboto Mono** (Technical Information)
   - Certificate numbers
   - Monetary values
   - Security codes

### Size Hierarchy
- Main Title: 36px
- Section Headers: 24px
- Body Text: 14px
- Small Print: 10px

## Security Features

### Visual Elements
1. **QR Code**
   - Size: 200x200px
   - Position: Bottom left corner
   - Contains: Certificate ID and verification URL

2. **Watermark**
   - Opacity: 10%
   - Pattern: Diagonal repeating logo
   - Scale: 20x20px grid

3. **Border Pattern**
   - Style: Geometric lines
   - Color: Gold (#C4A86F)
   - Opacity: 10%

### Digital Security
1. **Certificate ID Format**
   - Prefix: LC-YYYY-
   - Random Suffix: 5 digits
   - Example: LC-2023-98765

2. **Verification URL**
   - Format: https://verify.loanservice.com/[certificate-id]
   - SSL Protected
   - Mobile-responsive verification page

## Layout Guidelines

### Dimensions
- Width: 800px
- Height: 1100px
- Margins: 40px
- Grid: 12-column layout

### Spacing
- Section Padding: 20px
- Text Line Height: 1.5
- Paragraph Spacing: 16px

### Content Sections
1. **Header** (120px height)
   - Logo area: 80x80px
   - Title center aligned
   - Security strip

2. **Main Content** (800px height)
   - Two-column grid
   - Flexible content areas
   - Clear visual hierarchy

3. **Footer** (80px height)
   - Verification instructions
   - Certificate ID
   - Date of issue

## Interactive Elements (Digital Version)

### Hover States
- Links: 0.2s transition
- Color shift: 10% darker
- Subtle scale: 1.02

### Animations
- Load in: Fade up (0.3s)
- Section expansion: Ease-out (0.2s)
- QR code: Pulse on hover

## Print Specifications

### Paper Requirements
- Size: A4 (210 × 297mm)
- Weight: 100lb (270gsm)
- Finish: Matte with spot UV

### Security Features
- Microprint border
- UV reactive ink areas
- Embossed seal placement

## Implementation Notes

### SVG Optimization
- Minify for web use
- Preserve vector quality
- Maintain accessibility

### Responsive Behavior
- Maintain aspect ratio
- Scale security features
- Adjust typography for readability

### Browser Support
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+