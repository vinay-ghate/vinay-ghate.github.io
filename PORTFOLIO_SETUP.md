# Portfolio Data Management System

This portfolio website now uses a JSON-based data management system that makes it super easy to update your information without touching the HTML code.

## 🚀 Quick Start

1. **View your portfolio**: Open `index.html` in your browser
2. **Update data**: Directly edit `data.json` to modify your information

## 📁 File Structure

```
├── index.html              # Main portfolio website
├── data.json              # Your portfolio data (JSON format)
├── assets/
│   ├── js/
│   │   ├── data-loader.js # Loads data from JSON into HTML
│   │   └── script.js      # Original website functionality
│   ├── css/
│   └── images/
└── PORTFOLIO_SETUP.md     # This file
```

## 🎯 How It Works

### 1. Data Storage (`data.json`)
All your portfolio information is stored in a single JSON file:
- Personal information (name, title, contact details)
- Education and experience
- Projects and skills
- Blog posts and social links
- Services you offer

### 2. Dynamic Loading (`data-loader.js`)
The JavaScript file automatically:
- Loads data from `data.json`
- Populates the HTML with your information
- Updates all sections dynamically

## 📝 Updating Your Portfolio

### Direct JSON Editing
1. Open `data.json` in any text editor
2. Modify the values you want to change
3. Save the file
4. Refresh your portfolio website

## 🔧 Customization

### Adding New Projects
In `data.json`, add to the `projects` array:
```json
{
  "title": "Your Project Name",
  "category": "Web Application",
  "description": "Project description",
  "technologies": ["Python", "Flask", "JavaScript"],
  "image": "./assets/images/project-new.jpg",
  "link": "https://github.com/yourusername/project"
}
```

### Adding New Blog Posts
In `data.json`, add to the `blog` array:
```json
{
  "title": "Your Blog Post Title",
  "category": "Technology",
  "date": "2024-12-15",
  "description": "Brief description of your blog post",
  "image": "./assets/images/blog-new.jpg",
  "link": "https://yourblog.com/post-url"
}
```

### Updating Skills
Modify the `skillsProgress` array:
```json
{
  "skill": "New Skill",
  "percentage": 85
}
```

## 🎨 Current Data Structure

Your portfolio includes:
- ✅ Personal information (name, title, contact)
- ✅ Education (Zeal College of Engineering, etc.)
- ✅ Experience (TCS, Scrobits Technologies)
- ✅ Projects (TalkWithDB-AI-Agent, ChatterPy, etc.)
- ✅ Skills (Python, AI/ML, Web Development, etc.)
- ✅ Social profiles (GitHub, LinkedIn, Twitter, etc.)
- ✅ Services offered
- ✅ Blog posts (placeholder content)

## 🔄 Making Updates

### Personal Information
Update your name, title, contact details, and about sections through the admin interface or directly in the JSON.

### Experience & Education
Add new positions or educational qualifications by adding objects to the respective arrays.

### Projects
Showcase new projects by adding them to the projects array with proper categorization.

### Skills
Update your skill levels and add new technologies you've learned.

## 🚨 Important Notes

1. **Backup First**: Always create a backup before making changes
2. **Valid JSON**: Ensure your JSON is valid (use the admin interface to avoid errors)
3. **Image Paths**: Make sure image paths in the JSON match your actual image files
4. **Testing**: Test your changes by refreshing the portfolio website

## 🆘 Troubleshooting

### Website Not Loading Data
- Check if `data.json` exists and is valid JSON
- Open browser developer tools (F12) to check for errors
- Ensure `data-loader.js` is properly linked in `index.html`

### Admin Interface Issues
- Make sure you're accessing `admin.html` through a web server (not file://)
- Check browser console for JavaScript errors

### JSON Validation
Use online JSON validators or the admin interface to ensure your JSON is properly formatted.

## 🎉 Benefits

- ✅ Easy to update without HTML knowledge
- ✅ Centralized data management
- ✅ Backup and restore functionality
- ✅ No need to edit multiple HTML sections
- ✅ Professional admin interface
- ✅ Maintains original website design and functionality

---

**Your portfolio is now ready with your current information from resume.txt!** 🎊

Use the admin interface to make future updates easily.