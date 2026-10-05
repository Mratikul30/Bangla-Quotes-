/**
 * ==============================================================================
 * BANGLA STATUS & QUOTES APP (বাণী ও স্ট্যাটাস)
 * Full Application Logic (User App + Admin Panel)
 * ==============================================================================
 */

// Default Seed Categories
const DEFAULT_CATEGORIES = [
  { id: "love", name: "ভালোবাসা", icon: "❤️", color: "#F43F5E", bg: "#FFE4E6" },
  { id: "sad", name: "কষ্ট", icon: "💔", color: "#64748B", bg: "#F1F5F9" },
  { id: "romantic", name: "রোমান্টিক", icon: "🌹", color: "#EC4899", bg: "#FCE7F3" },
  { id: "islamic", name: "ইসলামিক", icon: "🌙", color: "#059669", bg: "#D1FAE5" },
  { id: "motivation", name: "মোটিভেশন", icon: "🔥", color: "#D97706", bg: "#FEF3C7" },
  { id: "friendship", name: "বন্ধুত্ব", icon: "🤝", color: "#2563EB", bg: "#DBEAFE" },
  { id: "attitude", name: "অ্যাটিটিউড", icon: "😎", color: "#7C3AED", bg: "#EDE9FE" },
  { id: "life", name: "জীবন", icon: "🌿", color: "#0D9488", bg: "#CCFBF1" },
  { id: "funny", name: "ফানি", icon: "😂", color: "#EA580C", bg: "#FFEDD5" }
];

// Default Initial Bangla Posts
const DEFAULT_POSTS = [
  {
    id: "post_1",
    title: "স্মৃতির মানুষ",
    content: "কিছু মানুষ জীবনে আসে,\nথাকার জন্য নয়,\nস্মৃতি হয়ে থাকার জন্য।",
    categoryId: "sad",
    categoryName: "কষ্ট",
    imageUrl: "",
    status: "published",
    createdAt: Date.now() - 3600000 * 2,
    updatedAt: Date.now() - 3600000 * 2,
    likesCount: 142
  },
  {
    id: "post_2",
    title: "ভালোবাসার অনুভূতি",
    content: "ভালোবাসা মানে শুধু হাত ধরা নয়,\nজীবনের প্রতিটি পদক্ষেপে\nছায়ার মতো পাশে থাকা।",
    categoryId: "love",
    categoryName: "ভালোবাসা",
    imageUrl: "",
    status: "published",
    createdAt: Date.now() - 3600000 * 6,
    updatedAt: Date.now() - 3600000 * 6,
    likesCount: 238
  },
  {
    id: "post_3",
    title: "সফলতার পথ",
    content: "পড়ে যাওয়া অপরাধ নয়,\nপড়ে গিয়ে উঠে না দাঁড়ানোই\nহলো আসল ব্যর্থতা।",
    categoryId: "motivation",
    categoryName: "মোটিভেশন",
    imageUrl: "",
    status: "published",
    createdAt: Date.now() - 3600000 * 12,
    updatedAt: Date.now() - 3600000 * 12,
    likesCount: 310
  },
  {
    id: "post_4",
    title: "শান্তির পরশ",
    content: "যে ব্যক্তি ধৈর্য ধারণ করে,\nআল্লাহ তা'আলা তার জন্য\nউত্তম পথ সহজ করে দেন।",
    categoryId: "islamic",
    categoryName: "ইসলামিক",
    imageUrl: "",
    status: "published",
    createdAt: Date.now() - 3600000 * 18,
    updatedAt: Date.now() - 3600000 * 18,
    likesCount: 425
  },
  {
    id: "post_5",
    title: "প্রকৃত বন্ধু",
    content: "হাজারো বসন্তের প্রয়োজন নেই,\nবিপদের দিনে পাশে থাকা\nএকটি খাঁটি বন্ধুই যথেষ্ট।",
    categoryId: "friendship",
    categoryName: "বন্ধুত্ব",
    imageUrl: "",
    status: "published",
    createdAt: Date.now() - 3600000 * 24,
    updatedAt: Date.now() - 3600000 * 24,
    likesCount: 194
  },
  {
    id: "post_6",
    title: "নিজের স্বকীয়তা",
    content: "কারো প্রিয় হওয়ার জন্য নিজেকে বদলানোর প্রয়োজন নেই,\nযে সত্যিকারের ভালোবাসবে\nসে তোমার ত্রুটিসহ ভালোবাসবে।",
    categoryId: "attitude",
    categoryName: "অ্যাটিটিউড",
    imageUrl: "",
    status: "published",
    createdAt: Date.now() - 3600000 * 30,
    updatedAt: Date.now() - 3600000 * 30,
    likesCount: 178
  },
  {
    id: "post_7",
    title: "জীবনের বাস্তবতা",
    content: "জীবনটা অনেক সহজ হতো,\nযদি মানুষ কথার চেয়ে\nকাজের গুরুত্ব বেশি দিত।",
    categoryId: "life",
    categoryName: "জীবন",
    imageUrl: "",
    status: "published",
    createdAt: Date.now() - 3600000 * 36,
    updatedAt: Date.now() - 3600000 * 36,
    likesCount: 265
  },
  {
    id: "post_8",
    title: "হাসির খোরাক",
    content: "পরীক্ষার আগের রাতে পড়ার যে স্পিড থাকে,\nতা দিয়ে রকেট চালালে\nএক ঘণ্টায় চাঁদে পৌঁছানো সম্ভব!",
    categoryId: "funny",
    categoryName: "ফানি",
    imageUrl: "",
    status: "published",
    createdAt: Date.now() - 3600000 * 40,
    updatedAt: Date.now() - 3600000 * 40,
    likesCount: 382
  }
];

// Strict Admin Credentials
const STRICT_ADMIN_EMAIL = "30atikul@gmail.com";
const STRICT_ADMIN_PASSWORD = "Mratikul100k@";

// App State
let currentTab = "home";
let currentCategoryFilter = "all";
let currentSearchCategory = "all";
let searchQuery = "";
let selectedPostForModal = null;
let currentAdminUser = null;

// Secret logo tap tracker
let logoClickCount = 0;
let logoClickTimer = null;

// Local Caches & Collections
let appCategories = [];
let appPosts = [];
let userLikes = new Set();
let userSaved = new Set();

// Active User UID
let currentUserId = localStorage.getItem("app_user_uid");
if (!currentUserId) {
  currentUserId = "anon_" + Math.random().toString(36).substring(2, 10);
  localStorage.setItem("app_user_uid", currentUserId);
}

// Convert English numbers to Bangla digits
function toBanglaNumber(num) {
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(num).replace(/[0-9]/g, w => bnDigits[+w]);
}

// Format Date to Bangla
function formatBanglaDate(timestamp) {
  if (!timestamp) return "কিছুক্ষণ আগে";
  const date = typeof timestamp === "number" ? new Date(timestamp) : (timestamp.toDate ? timestamp.toDate() : new Date(timestamp));
  const months = ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"];
  const day = toBanglaNumber(date.getDate());
  const month = months[date.getMonth()];
  const year = toBanglaNumber(date.getFullYear());
  return `${day} ${month}, ${year}`;
}

// ==============================================================================
// INITIALIZATION
// ==============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  loadInitialData();
  setupAuth();
  updateFirebaseStatusBadge();
});

// Initialize Theme (Dark / Light)
function initTheme() {
  const savedTheme = localStorage.getItem("theme_mode");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = savedTheme || (prefersDark ? "dark" : "light");
  
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    document.getElementById("theme-toggle-btn").textContent = "☀️";
  } else {
    document.documentElement.removeAttribute("data-theme");
    document.getElementById("theme-toggle-btn").textContent = "🌙";
  }
}

function toggleTheme() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  const newTheme = isDark ? "light" : "dark";
  
  if (newTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    document.getElementById("theme-toggle-btn").textContent = "☀️";
  } else {
    document.documentElement.removeAttribute("data-theme");
    document.getElementById("theme-toggle-btn").textContent = "🌙";
  }
  localStorage.setItem("theme_mode", newTheme);
}

// Load Initial Data (Firestore or LocalStorage Fallback)
async function loadInitialData() {
  // Load saved likes & bookmarks from localStorage
  try {
    const savedLikes = JSON.parse(localStorage.getItem("user_likes_" + currentUserId) || "[]");
    userLikes = new Set(savedLikes);
    const savedPosts = JSON.parse(localStorage.getItem("user_saved_" + currentUserId) || "[]");
    userSaved = new Set(savedPosts);
  } catch (e) {
    console.error(e);
  }

  // Load Categories
  await loadCategories();

  // Load Posts
  await loadPosts();

  renderAll();
}

// Setup Authentication
function setupAuth() {
  const fb = window.appFirebase;
  if (fb && fb.isConfigured() && fb.getAuth()) {
    const auth = fb.getAuth();
    
    // Listen for Auth changes
    auth.onAuthStateChanged(user => {
      if (user && !user.isAnonymous && user.email === STRICT_ADMIN_EMAIL) {
        // Logged in as Strict Admin
        currentAdminUser = user;
        sessionStorage.setItem("admin_auth_user", STRICT_ADMIN_EMAIL);
        showAdminDashboard(user.email);
      } else {
        currentAdminUser = null;
        if (sessionStorage.getItem("admin_auth_user") !== STRICT_ADMIN_EMAIL) {
          showAdminLogin();
        }
      }
    });

    // Sign in anonymously for regular user operations
    if (!auth.currentUser) {
      auth.signInAnonymously().catch(err => {
        console.warn("Anonymous auth fallback:", err);
      });
    }
  } else {
    // Check if strict admin was logged in in this session
    if (sessionStorage.getItem("admin_auth_user") === STRICT_ADMIN_EMAIL) {
      showAdminDashboard(STRICT_ADMIN_EMAIL);
    } else {
      showAdminLogin();
    }
  }
}

// ==============================================================================
// CATEGORIES DATA LAYER
// ==============================================================================
async function loadCategories() {
  const fb = window.appFirebase;
  if (fb && fb.isConfigured() && fb.getDb()) {
    try {
      const snap = await fb.getDb().collection("categories").get();
      if (!snap.empty) {
        appCategories = [];
        snap.forEach(doc => {
          appCategories.push({ id: doc.id, ...doc.data() });
        });
        return;
      }
    } catch (e) {
      console.warn("Could not fetch categories from Firestore:", e);
    }
  }

  // Fallback to localStorage or default
  const localCats = localStorage.getItem("app_categories");
  if (localCats) {
    try {
      appCategories = JSON.parse(localCats);
    } catch (e) {
      appCategories = [...DEFAULT_CATEGORIES];
    }
  } else {
    appCategories = [...DEFAULT_CATEGORIES];
    localStorage.setItem("app_categories", JSON.stringify(appCategories));
  }
}

function saveLocalCategories() {
  localStorage.setItem("app_categories", JSON.stringify(appCategories));
}

// ==============================================================================
// POSTS DATA LAYER
// ==============================================================================
async function loadPosts() {
  const fb = window.appFirebase;
  if (fb && fb.isConfigured() && fb.getDb()) {
    try {
      const snap = await fb.getDb().collection("posts").orderBy("createdAt", "desc").get();
      if (!snap.empty) {
        appPosts = [];
        snap.forEach(doc => {
          appPosts.push({ id: doc.id, ...doc.data() });
        });
        return;
      }
    } catch (e) {
      console.warn("Could not fetch posts from Firestore:", e);
    }
  }

  // Fallback to localStorage or default
  const localPosts = localStorage.getItem("app_posts");
  if (localPosts) {
    try {
      appPosts = JSON.parse(localPosts);
    } catch (e) {
      appPosts = [...DEFAULT_POSTS];
    }
  } else {
    appPosts = [...DEFAULT_POSTS];
    localStorage.setItem("app_posts", JSON.stringify(appPosts));
  }
}

function saveLocalPosts() {
  localStorage.setItem("app_posts", JSON.stringify(appPosts));
}

// ==============================================================================
// RENDERING
// ==============================================================================
function renderAll() {
  renderHomeCategoryPills();
  renderHomeFeed();
  renderSearchCategoryPills();
  renderCategoriesGrid();
  renderSavedQuotes();
  renderAdminCategoryDropdowns();
  renderAdminPostsList();
  renderAdminCategoriesList();
  updateAdminMetrics();
}

// Render Category Pills on Home
function renderHomeCategoryPills() {
  const container = document.getElementById("home-category-pills");
  if (!container) return;

  let html = `
    <button class="cat-pill ${currentCategoryFilter === 'all' ? 'active' : ''}" onclick="selectCategoryFilter('all')">
      <span>✨</span> <span>সকল</span>
    </button>
  `;

  appCategories.forEach(cat => {
    const isActive = currentCategoryFilter === cat.id;
    html += `
      <button class="cat-pill ${isActive ? 'active' : ''}" onclick="selectCategoryFilter('${cat.id}')">
        <span>${cat.icon || '🏷️'}</span> <span>${cat.name}</span>
      </button>
    `;
  });

  container.innerHTML = html;
}

// Filter Home Feed by Category
function selectCategoryFilter(catId) {
  currentCategoryFilter = catId;
  renderHomeCategoryPills();
  renderHomeFeed();

  // Update Section Title
  const titleEl = document.getElementById("home-feed-title");
  if (catId === "all") {
    titleEl.textContent = "নতুন স্ট্যাটাস";
  } else {
    const cat = appCategories.find(c => c.id === catId);
    titleEl.textContent = (cat ? cat.name : "") + " স্ট্যাটাস";
  }
}

// Render Home Feed Quotes
function renderHomeFeed() {
  const container = document.getElementById("home-quotes-container");
  const countBadge = document.getElementById("home-posts-count");
  if (!container) return;

  // Filter published posts
  let posts = appPosts.filter(p => p.status === "published");

  if (currentCategoryFilter !== "all") {
    posts = posts.filter(p => p.categoryId === currentCategoryFilter);
  }

  // Update count badge
  countBadge.textContent = `${toBanglaNumber(posts.length)}টি স্ট্যাটাস`;

  if (posts.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📂</div>
        <h3 class="empty-title">কোন স্ট্যাটাস পাওয়া যায়নি</h3>
        <p class="empty-desc">এই বিভাগে এখনো কোন স্ট্যাটাস প্রকাশিত হয়নি।</p>
      </div>
    `;
    return;
  }

  let html = "";
  posts.forEach(post => {
    html += buildQuoteCardHTML(post);
  });

  container.innerHTML = html;
}

// Build Quote Card HTML
function buildQuoteCardHTML(post) {
  const isLiked = userLikes.has(post.id);
  const isSaved = userSaved.has(post.id);
  const dateStr = formatBanglaDate(post.createdAt);
  const likesFormatted = toBanglaNumber(post.likesCount || 0);

  return `
    <div class="quote-card" onclick="openDetailsModal('${post.id}')">
      <div class="card-top">
        <span class="category-tag">
          <span>🏷️</span> <span>${post.categoryName || 'সাধারণ'}</span>
        </span>
        <span class="card-date">${dateStr}</span>
      </div>

      ${post.title ? `<div class="quote-title">${post.title}</div>` : ''}

      <div class="quote-content">${escapeHTML(post.content)}</div>

      ${post.imageUrl ? `<img src="${post.imageUrl}" class="quote-card-img" alt="Post Image" loading="lazy">` : ''}

      <div class="card-actions" onclick="event.stopPropagation()">
        <button class="action-btn ${isLiked ? 'liked' : ''}" onclick="toggleLike('${post.id}', event)">
          <span class="icon">${isLiked ? '❤️' : '🤍'}</span>
          <span>${likesFormatted}</span>
        </button>

        <button class="action-btn ${isSaved ? 'saved' : ''}" onclick="toggleSave('${post.id}', event)">
          <span class="icon">${isSaved ? '🔖' : '📑'}</span>
          <span>${isSaved ? 'সংরক্ষিত' : 'সংরক্ষণ'}</span>
        </button>

        <button class="action-btn" onclick="copyPostText('${post.id}', event)">
          <span class="icon">📋</span>
          <span>কপি</span>
        </button>

        <button class="action-btn" onclick="sharePost('${post.id}', event)">
          <span class="icon">📤</span>
          <span>শেয়ার</span>
        </button>
      </div>
    </div>
  `;
}

// ==============================================================================
// SEARCH SCREEN
// ==============================================================================
function renderSearchCategoryPills() {
  const container = document.getElementById("search-category-pills");
  if (!container) return;

  let html = `
    <button class="cat-pill ${currentSearchCategory === 'all' ? 'active' : ''}" onclick="selectSearchCategory('all')">
      সকল
    </button>
  `;

  appCategories.forEach(cat => {
    const isActive = currentSearchCategory === cat.id;
    html += `
      <button class="cat-pill ${isActive ? 'active' : ''}" onclick="selectSearchCategory('${cat.id}')">
        ${cat.name}
      </button>
    `;
  });

  container.innerHTML = html;
}

function selectSearchCategory(catId) {
  currentSearchCategory = catId;
  renderSearchCategoryPills();
  executeSearch();
}

function handleSearch(val) {
  const query = (val || "").trim().toLowerCase();
  
  // Secret trigger for Atikul
  if (query === "admin30" || query === "30atikul" || query === "/admin") {
    clearSearch();
    openSecretAdminPortal();
    return;
  }

  searchQuery = query;
  const clearBtn = document.getElementById("clear-search-btn");
  clearBtn.style.display = searchQuery ? "flex" : "none";
  executeSearch();
}

function clearSearch() {
  const input = document.getElementById("search-input");
  input.value = "";
  searchQuery = "";
  document.getElementById("clear-search-btn").style.display = "none";
  executeSearch();
}

function executeSearch() {
  const container = document.getElementById("search-quotes-container");
  const countBadge = document.getElementById("search-result-count");
  if (!container) return;

  let results = appPosts.filter(p => p.status === "published");

  if (currentSearchCategory !== "all") {
    results = results.filter(p => p.categoryId === currentSearchCategory);
  }

  if (searchQuery) {
    results = results.filter(p => {
      const matchContent = (p.content || "").toLowerCase().includes(searchQuery);
      const matchTitle = (p.title || "").toLowerCase().includes(searchQuery);
      const matchCat = (p.categoryName || "").toLowerCase().includes(searchQuery);
      return matchContent || matchTitle || matchCat;
    });
  }

  countBadge.textContent = `${toBanglaNumber(results.length)}টি`;

  if (results.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3 class="empty-title">কোন ফলাফল পাওয়া যায়নি</h3>
        <p class="empty-desc">অন্য কোনো শব্দ বা বিভাগ দিয়ে খুঁজে দেখুন।</p>
      </div>
    `;
    return;
  }

  let html = "";
  results.forEach(post => {
    html += buildQuoteCardHTML(post);
  });
  container.innerHTML = html;
}

// ==============================================================================
// CATEGORIES GRID SCREEN
// ==============================================================================
function renderCategoriesGrid() {
  const container = document.getElementById("categories-grid-container");
  const countBadge = document.getElementById("total-categories-badge");
  if (!container) return;

  countBadge.textContent = `${toBanglaNumber(appCategories.length)}টি বিভাগ`;

  let html = "";
  appCategories.forEach(cat => {
    const postCount = appPosts.filter(p => p.categoryId === cat.id && p.status === "published").length;
    html += `
      <div class="cat-card" onclick="goToCategoryFeed('${cat.id}')">
        <div class="cat-card-icon" style="background: ${cat.bg || 'var(--primary-light)'}; color: ${cat.color || 'var(--primary)'};">
          ${cat.icon || '🏷️'}
        </div>
        <div class="cat-card-title">${cat.name}</div>
        <div class="cat-card-count">${toBanglaNumber(postCount)}টি স্ট্যাটাস</div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function goToCategoryFeed(catId) {
  currentCategoryFilter = catId;
  switchTab("home");
  renderHomeCategoryPills();
  renderHomeFeed();
}

// ==============================================================================
// SAVED SCREEN
// ==============================================================================
function renderSavedQuotes() {
  const container = document.getElementById("saved-quotes-container");
  const countBadge = document.getElementById("saved-posts-count");
  if (!container) return;

  const savedList = appPosts.filter(p => userSaved.has(p.id));
  countBadge.textContent = `${toBanglaNumber(savedList.length)}টি সংরক্ষিত`;

  if (savedList.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔖</div>
        <h3 class="empty-title">কোন সংরক্ষিত স্ট্যাটাস নেই</h3>
        <p class="empty-desc">আপনার পছন্দের স্ট্যাটাসের নিচে সেভ (🔖) বাটনে চাপ দিয়ে এখানে জমা রাখতে পারেন।</p>
      </div>
    `;
    return;
  }

  let html = "";
  savedList.forEach(post => {
    html += buildQuoteCardHTML(post);
  });
  container.innerHTML = html;
}

// ==============================================================================
// INTERACTIONS: LIKE, SAVE, COPY, SHARE
// ==============================================================================
async function toggleLike(postId, event) {
  if (event) event.stopPropagation();

  const post = appPosts.find(p => p.id === postId);
  if (!post) return;

  const isLiked = userLikes.has(postId);
  const fb = window.appFirebase;

  if (isLiked) {
    userLikes.delete(postId);
    post.likesCount = Math.max(0, (post.likesCount || 1) - 1);
  } else {
    userLikes.add(postId);
    post.likesCount = (post.likesCount || 0) + 1;
    showToast("❤️ আপনি স্ট্যাটাসটিতে লাইক দিয়েছেন!");
  }

  // Persist locally
  localStorage.setItem("user_likes_" + currentUserId, JSON.stringify(Array.from(userLikes)));
  saveLocalPosts();

  // Persist in Firebase if configured
  if (fb && fb.isConfigured() && fb.getDb()) {
    try {
      const db = fb.getDb();
      const likeDocId = `${currentUserId}_${postId}`;
      if (isLiked) {
        await db.collection("userLikes").doc(likeDocId).delete();
        await db.collection("posts").doc(postId).update({
          likesCount: firebase.firestore.FieldValue.increment(-1)
        });
      } else {
        await db.collection("userLikes").doc(likeDocId).set({
          userId: currentUserId,
          postId: postId,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        await db.collection("posts").doc(postId).update({
          likesCount: firebase.firestore.FieldValue.increment(1)
        });
      }
    } catch (e) {
      console.warn("Error updating like in Firestore:", e);
    }
  }

  // Refresh current view
  if (currentTab === "home") renderHomeFeed();
  if (currentTab === "search") executeSearch();
  if (currentTab === "saved") renderSavedQuotes();
  if (selectedPostForModal && selectedPostForModal.id === postId) {
    updateModalLikeButton();
  }
}

async function toggleSave(postId, event) {
  if (event) event.stopPropagation();

  const isSaved = userSaved.has(postId);
  const fb = window.appFirebase;

  if (isSaved) {
    userSaved.delete(postId);
    showToast("সংরক্ষণ তালিকা থেকে সরানো হয়েছে");
  } else {
    userSaved.add(postId);
    showToast("🔖 স্ট্যাটাস সংরক্ষণ করা হয়েছে!");
  }

  // Persist locally
  localStorage.setItem("user_saved_" + currentUserId, JSON.stringify(Array.from(userSaved)));

  // Persist in Firebase if configured
  if (fb && fb.isConfigured() && fb.getDb()) {
    try {
      const db = fb.getDb();
      const saveDocId = `${currentUserId}_${postId}`;
      if (isSaved) {
        await db.collection("userSavedPosts").doc(saveDocId).delete();
      } else {
        await db.collection("userSavedPosts").doc(saveDocId).set({
          userId: currentUserId,
          postId: postId,
          savedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
      }
    } catch (e) {
      console.warn("Error updating save in Firestore:", e);
    }
  }

  if (currentTab === "home") renderHomeFeed();
  if (currentTab === "search") executeSearch();
  if (currentTab === "saved") renderSavedQuotes();
  if (selectedPostForModal && selectedPostForModal.id === postId) {
    updateModalSaveButton();
  }
}

// Copy Status to Clipboard
function copyPostText(postId, event) {
  if (event) event.stopPropagation();
  const post = appPosts.find(p => p.id === postId);
  if (!post) return;

  const textToCopy = post.content;
  performCopy(textToCopy);
}

function performCopy(text) {
  // If running inside Android WebView with Native Bridge
  if (window.AndroidBridge && window.AndroidBridge.copyToClipboard) {
    window.AndroidBridge.copyToClipboard(text);
    showToast("📋 স্ট্যাটাস কপি করা হয়েছে!");
    return;
  }

  // Web Clipboard API
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast("📋 স্ট্যাটাস কপি করা হয়েছে!");
    }).catch(() => {
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand("copy");
    showToast("📋 স্ট্যাটাস কপি করা হয়েছে!");
  } catch (err) {
    showToast("কপি করা সম্ভব হয়নি");
  }
  document.body.removeChild(textArea);
}

// Share Post
function sharePost(postId, event) {
  if (event) event.stopPropagation();
  const post = appPosts.find(p => p.id === postId);
  if (!post) return;

  const shareText = `${post.content}\n\n— বাণী ও স্ট্যাটাস (Bangla Quotes)`;
  const shareTitle = post.title || "বাণী ও স্ট্যাটাস";

  // Check Android Bridge
  if (window.AndroidBridge && window.AndroidBridge.share) {
    window.AndroidBridge.share(shareText, shareTitle);
    return;
  }

  // Web Share API
  if (navigator.share) {
    navigator.share({
      title: shareTitle,
      text: shareText
    }).catch(err => {
      if (err.name !== "AbortError") {
        performCopy(shareText);
      }
    });
  } else {
    performCopy(shareText);
  }
}

// ==============================================================================
// DETAILS MODAL
// ==============================================================================
function openDetailsModal(postId) {
  const post = appPosts.find(p => p.id === postId);
  if (!post) return;

  selectedPostForModal = post;

  document.getElementById("modal-category-tag").textContent = post.categoryName || "সাধারণ";
  document.getElementById("modal-content").textContent = post.content;
  document.getElementById("modal-date").textContent = formatBanglaDate(post.createdAt);
  document.getElementById("modal-likes-count").textContent = `❤️ ${toBanglaNumber(post.likesCount || 0)}টি লাইক`;

  const titleEl = document.getElementById("modal-title");
  if (post.title) {
    titleEl.textContent = post.title;
    titleEl.style.display = "block";
  } else {
    titleEl.style.display = "none";
  }

  const imgContainer = document.getElementById("modal-img-container");
  const modalImg = document.getElementById("modal-image");
  if (post.imageUrl) {
    modalImg.src = post.imageUrl;
    imgContainer.style.display = "block";
  } else {
    imgContainer.style.display = "none";
  }

  updateModalLikeButton();
  updateModalSaveButton();

  document.getElementById("post-details-modal").classList.add("open");
}

function updateModalLikeButton() {
  if (!selectedPostForModal) return;
  const isLiked = userLikes.has(selectedPostForModal.id);
  const btn = document.getElementById("modal-like-btn");
  const text = document.getElementById("modal-like-text");
  if (isLiked) {
    btn.classList.add("liked");
    text.textContent = "লাইকড";
  } else {
    btn.classList.remove("liked");
    text.textContent = "লাইক";
  }
  document.getElementById("modal-likes-count").textContent = `❤️ ${toBanglaNumber(selectedPostForModal.likesCount || 0)}টি লাইক`;
}

function updateModalSaveButton() {
  if (!selectedPostForModal) return;
  const isSaved = userSaved.has(selectedPostForModal.id);
  const btn = document.getElementById("modal-save-btn");
  const text = document.getElementById("modal-save-text");
  if (isSaved) {
    btn.classList.add("saved");
    text.textContent = "সংরক্ষিত";
  } else {
    btn.classList.remove("saved");
    text.textContent = "সংরক্ষণ";
  }
}

function handleModalLike() {
  if (selectedPostForModal) {
    toggleLike(selectedPostForModal.id);
  }
}

function handleModalSave() {
  if (selectedPostForModal) {
    toggleSave(selectedPostForModal.id);
  }
}

function handleModalCopy() {
  if (selectedPostForModal) {
    performCopy(selectedPostForModal.content);
  }
}

function handleModalShare() {
  if (selectedPostForModal) {
    sharePost(selectedPostForModal.id);
  }
}

function closeDetailsModal(event) {
  if (event && event.target !== event.currentTarget) return;
  document.getElementById("post-details-modal").classList.remove("open");
  selectedPostForModal = null;
}

// ==============================================================================
// NAVIGATION
// ==============================================================================
function switchTab(tabId) {
  currentTab = tabId;

  // Toggle screens
  document.querySelectorAll(".tab-screen").forEach(screen => {
    screen.classList.remove("active");
  });
  const target = document.getElementById("tab-" + tabId);
  if (target) target.classList.add("active");

  // Toggle bottom nav icons
  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.remove("active");
  });
  const navBtn = document.getElementById("nav-btn-" + tabId);
  if (navBtn) navBtn.classList.add("active");

  // Screen specific refresh
  if (tabId === "home") {
    renderHomeFeed();
  } else if (tabId === "search") {
    executeSearch();
  } else if (tabId === "categories") {
    renderCategoriesGrid();
  } else if (tabId === "saved") {
    renderSavedQuotes();
  } else if (tabId === "admin") {
    updateAdminMetrics();
    renderAdminPostsList();
    renderAdminCategoriesList();
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==============================================================================
// ADMIN PANEL
// ==============================================================================
function showAdminLogin() {
  document.getElementById("admin-login-view").style.display = "block";
  document.getElementById("admin-dashboard-view").style.display = "none";
}

function showAdminDashboard(email) {
  document.getElementById("admin-login-view").style.display = "none";
  document.getElementById("admin-dashboard-view").style.display = "block";
  document.getElementById("admin-user-display").textContent = email || "admin@example.com";
  updateAdminMetrics();
  renderAdminCategoryDropdowns();
  renderAdminPostsList();
}

// Secret logo tap: 5 taps within 2.5 seconds triggers admin portal
function handleBrandLogoClick() {
  logoClickCount++;
  clearTimeout(logoClickTimer);
  logoClickTimer = setTimeout(() => {
    logoClickCount = 0;
  }, 2500);

  if (logoClickCount >= 5) {
    logoClickCount = 0;
    openSecretAdminPortal();
  } else {
    switchTab("home");
  }
}

function openSecretAdminPortal() {
  switchTab("admin");
  const isAuth = sessionStorage.getItem("admin_auth_user") === STRICT_ADMIN_EMAIL ||
                 (currentAdminUser && currentAdminUser.email === STRICT_ADMIN_EMAIL);
  if (isAuth) {
    showAdminDashboard(STRICT_ADMIN_EMAIL);
  } else {
    showAdminLogin();
  }
  showToast("🔐 অ্যাডমিন প্রবেশদ্বার উন্মুক্ত");
}

function closeAdminPortal() {
  switchTab("home");
}

async function handleAdminLogin(event) {
  event.preventDefault();
  const emailInput = document.getElementById("admin-email").value.trim().toLowerCase();
  const passwordInput = document.getElementById("admin-password").value;
  const alertBox = document.getElementById("login-error-alert");
  const submitBtn = document.getElementById("login-submit-btn");

  alertBox.style.display = "none";

  // STRICT SECURITY CHECK: ONLY 30atikul@gmail.com and Mratikul100k@ allowed!
  if (emailInput !== STRICT_ADMIN_EMAIL || passwordInput !== STRICT_ADMIN_PASSWORD) {
    alertBox.textContent = "অননুমোদিত প্রবেশ! শুধুমাত্র অনুমোদিত অ্যাকাউন্ট (30atikul@gmail.com) সঠিক পাসওয়ার্ড দিয়ে প্রবেশ করতে পারবেন।";
    alertBox.style.display = "block";
    return;
  }

  submitBtn.disabled = true;
  submitBtn.innerHTML = "<span>যাচাই করা হচ্ছে...</span>";

  const fb = window.appFirebase;
  if (fb && fb.isConfigured() && fb.getAuth()) {
    try {
      await fb.getAuth().signInWithEmailAndPassword(emailInput, passwordInput);
    } catch (err) {
      console.warn("Firebase Auth error, checking local match:", err);
      // If Firebase Auth user does not exist in console yet, allow authorized owner
    }
  }

  sessionStorage.setItem("admin_auth_user", STRICT_ADMIN_EMAIL);
  submitBtn.disabled = false;
  submitBtn.innerHTML = "<span>লগইন করুন</span>";
  showAdminDashboard(STRICT_ADMIN_EMAIL);
  showToast("স্বাগতম আতিকুল ভাই!");
}

function handleAdminLogout() {
  const fb = window.appFirebase;
  if (fb && fb.isConfigured() && fb.getAuth()) {
    fb.getAuth().signOut();
  }
  sessionStorage.removeItem("admin_auth_user");
  currentAdminUser = null;
  closeAdminPortal();
  showToast("লগআউট সম্পন্ন হয়েছে");
}

function switchAdminTab(subTabId) {
  document.querySelectorAll(".admin-subnav-btn").forEach(btn => btn.classList.remove("active"));
  document.getElementById("admin-nav-" + subTabId).classList.add("active");

  document.querySelectorAll(".admin-sub-content").forEach(el => el.style.display = "none");
  document.getElementById("admin-sub-" + subTabId).style.display = "block";

  if (subTabId === "manage-posts") {
    renderAdminPostsList();
  } else if (subTabId === "categories") {
    renderAdminCategoriesList();
  } else if (subTabId === "settings") {
    initSettingsView();
  }
}

function updateAdminMetrics() {
  const total = appPosts.length;
  const published = appPosts.filter(p => p.status === "published").length;
  const draft = appPosts.filter(p => p.status === "draft").length;
  const cats = appCategories.length;

  document.getElementById("metric-total-posts").textContent = toBanglaNumber(total);
  document.getElementById("metric-published-posts").textContent = toBanglaNumber(published);
  document.getElementById("metric-draft-posts").textContent = toBanglaNumber(draft);
  document.getElementById("metric-categories-count").textContent = toBanglaNumber(cats);
}

function renderAdminCategoryDropdowns() {
  const postSelect = document.getElementById("post-category");
  const editSelect = document.getElementById("edit-post-category");
  const filterSelect = document.getElementById("admin-category-filter");

  let options = "";
  let filterOptions = '<option value="all">সকল বিভাগ</option>';

  appCategories.forEach(cat => {
    options += `<option value="${cat.id}">${cat.name}</option>`;
    filterOptions += `<option value="${cat.id}">${cat.name}</option>`;
  });

  if (postSelect) postSelect.innerHTML = options;
  if (editSelect) editSelect.innerHTML = options;
  if (filterSelect) filterSelect.innerHTML = filterOptions;
}

// Selected image for create post
let selectedImageFile = null;
let selectedImageDataUrl = "";

function previewSelectedImage(input) {
  if (input.files && input.files[0]) {
    const file = input.files[0];
    selectedImageFile = file;
    const reader = new FileReader();
    reader.onload = e => {
      selectedImageDataUrl = e.target.result;
      document.getElementById("image-preview-img").src = selectedImageDataUrl;
      document.getElementById("image-preview-container").style.display = "block";
    };
    reader.readAsDataURL(file);
  }
}

function clearSelectedImage() {
  selectedImageFile = null;
  selectedImageDataUrl = "";
  document.getElementById("post-image").value = "";
  document.getElementById("image-preview-container").style.display = "none";
}

// CREATE POST
async function handleCreatePost(event) {
  event.preventDefault();
  const title = document.getElementById("post-title").value.trim();
  const content = document.getElementById("post-content").value.trim();
  const categoryId = document.getElementById("post-category").value;
  const status = document.querySelector('input[name="post-status"]:checked').value;
  const submitBtn = document.getElementById("save-post-btn");

  if (!content) {
    alert("অনুগ্রহ করে স্ট্যাটাস লিখুন");
    return;
  }

  const categoryObj = appCategories.find(c => c.id === categoryId);
  const categoryName = categoryObj ? categoryObj.name : "সাধারণ";

  submitBtn.disabled = true;
  submitBtn.innerHTML = "<span>সংরক্ষণ করা হচ্ছে...</span>";

  let finalImageUrl = selectedImageDataUrl;

  // Firebase Storage upload if configured
  const fb = window.appFirebase;
  if (selectedImageFile && fb && fb.isConfigured() && fb.getStorage()) {
    try {
      const storageRef = fb.getStorage().ref();
      const imgRef = storageRef.child(`post_images/${Date.now()}_${selectedImageFile.name}`);
      const uploadSnap = await imgRef.put(selectedImageFile);
      finalImageUrl = await uploadSnap.ref.getDownloadURL();
    } catch (err) {
      console.warn("Storage upload failed, keeping base64 preview:", err);
    }
  }

  const newPost = {
    id: "post_" + Date.now(),
    title: title,
    content: content,
    categoryId: categoryId,
    categoryName: categoryName,
    imageUrl: finalImageUrl,
    status: status,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    likesCount: 0
  };

  // Firestore insertion if configured
  if (fb && fb.isConfigured() && fb.getDb()) {
    try {
      const docRef = await fb.getDb().collection("posts").add({
        title: newPost.title,
        content: newPost.content,
        categoryId: newPost.categoryId,
        categoryName: newPost.categoryName,
        imageUrl: newPost.imageUrl,
        status: newPost.status,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        likesCount: 0
      });
      newPost.id = docRef.id;
    } catch (e) {
      console.warn("Firestore post creation failed:", e);
    }
  }

  // Prepend to local posts
  appPosts.unshift(newPost);
  saveLocalPosts();

  // Reset form
  document.getElementById("post-title").value = "";
  document.getElementById("post-content").value = "";
  clearSelectedImage();

  submitBtn.disabled = false;
  submitBtn.innerHTML = "<span>🚀 স্ট্যাটাস প্রকাশ করুন (Publish Post)</span>";

  showToast("নতুন স্ট্যাটাস সফলভাবে তৈরি হয়েছে!");
  updateAdminMetrics();
  renderHomeFeed();

  // Switch to manage posts tab
  switchAdminTab("manage-posts");
}

// MANAGE POSTS LIST
function renderAdminPostsList() {
  const container = document.getElementById("admin-posts-container");
  if (!container) return;

  const filterText = (document.getElementById("admin-post-filter")?.value || "").toLowerCase();
  const filterCat = document.getElementById("admin-category-filter")?.value || "all";

  let posts = [...appPosts];

  if (filterCat !== "all") {
    posts = posts.filter(p => p.categoryId === filterCat);
  }

  if (filterText) {
    posts = posts.filter(p => 
      (p.content || "").toLowerCase().includes(filterText) ||
      (p.title || "").toLowerCase().includes(filterText)
    );
  }

  if (posts.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📝</div>
        <h3 class="empty-title">কোন স্ট্যাটাস পাওয়া যায়নি</h3>
        <p class="empty-desc">নতুন স্ট্যাটাস যোগ করতে '➕ নতুন স্ট্যাটাস' ট্যাবে যান।</p>
      </div>
    `;
    return;
  }

  let html = "";
  posts.forEach(post => {
    const isPublished = post.status === "published";
    html += `
      <div class="manage-post-card">
        <div class="manage-post-header">
          <span class="category-tag">🏷️ ${post.categoryName}</span>
          <span class="${isPublished ? 'badge-published' : 'badge-draft'}">
            ${isPublished ? 'প্রকাশিত' : 'ড্রাফট'}
          </span>
        </div>

        ${post.title ? `<div style="font-size: 14px; font-weight: 700;">${post.title}</div>` : ''}
        <div class="manage-post-snippet">${escapeHTML(post.content)}</div>
        <div style="font-size: 11px; color: var(--text-muted);">তারিখ: ${formatBanglaDate(post.createdAt)} | লাইক: ${toBanglaNumber(post.likesCount || 0)}</div>

        <div class="manage-post-actions">
          <button class="btn-secondary" style="font-size: 12px; padding: 4px 8px;" onclick="openEditModal('${post.id}')">
            ✏️ এডিট
          </button>
          
          <button class="btn-secondary" style="font-size: 12px; padding: 4px 8px;" onclick="togglePublishStatus('${post.id}')">
            ${isPublished ? 'আনপাবলিশ ✕' : 'পাবলিশ ✓'}
          </button>

          <button class="btn-danger" style="font-size: 12px; padding: 4px 8px; margin-left: auto;" onclick="deletePostConfirm('${post.id}')">
            🗑️ ডিলিট
          </button>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function filterAdminPosts() {
  renderAdminPostsList();
}

function filterAdminPostsByCategory() {
  renderAdminPostsList();
}

async function togglePublishStatus(postId) {
  const post = appPosts.find(p => p.id === postId);
  if (!post) return;

  const newStatus = post.status === "published" ? "draft" : "published";
  post.status = newStatus;
  post.updatedAt = Date.now();

  const fb = window.appFirebase;
  if (fb && fb.isConfigured() && fb.getDb()) {
    try {
      await fb.getDb().collection("posts").doc(postId).update({
        status: newStatus,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    } catch (e) {
      console.warn(e);
    }
  }

  saveLocalPosts();
  renderAdminPostsList();
  updateAdminMetrics();
  renderHomeFeed();
  showToast(newStatus === "published" ? "স্ট্যাটাসটি প্রকাশিত হয়েছে" : "স্ট্যাটাসটি ড্রাফট করা হয়েছে");
}

function deletePostConfirm(postId) {
  if (confirm("Are you sure you want to delete this post?\nআপনি কি নিশ্চিতভাবে এই স্ট্যাটাসটি ডিলিট করতে চান?")) {
    deletePost(postId);
  }
}

async function deletePost(postId) {
  appPosts = appPosts.filter(p => p.id !== postId);
  saveLocalPosts();

  const fb = window.appFirebase;
  if (fb && fb.isConfigured() && fb.getDb()) {
    try {
      await fb.getDb().collection("posts").doc(postId).delete();
    } catch (e) {
      console.warn(e);
    }
  }

  renderAdminPostsList();
  updateAdminMetrics();
  renderHomeFeed();
  showToast("স্ট্যাটাসটি মুছে ফেলা হয়েছে");
}

// EDIT POST MODAL
let editImageFile = null;
let editImageDataUrl = "";

function openEditModal(postId) {
  const post = appPosts.find(p => p.id === postId);
  if (!post) return;

  document.getElementById("edit-post-id").value = post.id;
  document.getElementById("edit-post-title").value = post.title || "";
  document.getElementById("edit-post-content").value = post.content || "";
  document.getElementById("edit-post-category").value = post.categoryId;

  if (post.status === "published") {
    document.getElementById("edit-status-published").checked = true;
  } else {
    document.getElementById("edit-status-draft").checked = true;
  }

  editImageFile = null;
  editImageDataUrl = post.imageUrl || "";

  if (post.imageUrl) {
    document.getElementById("edit-image-preview-img").src = post.imageUrl;
    document.getElementById("edit-image-preview-container").style.display = "block";
  } else {
    document.getElementById("edit-image-preview-container").style.display = "none";
  }

  document.getElementById("edit-post-modal").classList.add("open");
}

function previewEditImage(input) {
  if (input.files && input.files[0]) {
    editImageFile = input.files[0];
    const reader = new FileReader();
    reader.onload = e => {
      editImageDataUrl = e.target.result;
      document.getElementById("edit-image-preview-img").src = editImageDataUrl;
      document.getElementById("edit-image-preview-container").style.display = "block";
    };
    reader.readAsDataURL(editImageFile);
  }
}

function clearEditImage() {
  editImageFile = null;
  editImageDataUrl = "";
  document.getElementById("edit-post-image").value = "";
  document.getElementById("edit-image-preview-container").style.display = "none";
}

async function handleUpdatePost(event) {
  event.preventDefault();
  const postId = document.getElementById("edit-post-id").value;
  const post = appPosts.find(p => p.id === postId);
  if (!post) return;

  const title = document.getElementById("edit-post-title").value.trim();
  const content = document.getElementById("edit-post-content").value.trim();
  const categoryId = document.getElementById("edit-post-category").value;
  const status = document.querySelector('input[name="edit-post-status"]:checked').value;
  const updateBtn = document.getElementById("update-post-btn");

  const categoryObj = appCategories.find(c => c.id === categoryId);
  const categoryName = categoryObj ? categoryObj.name : "সাধারণ";

  updateBtn.disabled = true;
  updateBtn.textContent = "আপডেট হচ্ছে...";

  let finalImageUrl = editImageDataUrl;
  const fb = window.appFirebase;

  if (editImageFile && fb && fb.isConfigured() && fb.getStorage()) {
    try {
      const storageRef = fb.getStorage().ref();
      const imgRef = storageRef.child(`post_images/${Date.now()}_${editImageFile.name}`);
      const uploadSnap = await imgRef.put(editImageFile);
      finalImageUrl = await uploadSnap.ref.getDownloadURL();
    } catch (err) {
      console.warn(err);
    }
  }

  post.title = title;
  post.content = content;
  post.categoryId = categoryId;
  post.categoryName = categoryName;
  post.imageUrl = finalImageUrl;
  post.status = status;
  post.updatedAt = Date.now();

  saveLocalPosts();

  if (fb && fb.isConfigured() && fb.getDb()) {
    try {
      await fb.getDb().collection("posts").doc(postId).update({
        title,
        content,
        categoryId,
        categoryName,
        imageUrl: finalImageUrl,
        status,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    } catch (e) {
      console.warn(e);
    }
  }

  updateBtn.disabled = false;
  updateBtn.textContent = "আপডেট সংরক্ষণ করুন";
  closeEditModal();

  renderAdminPostsList();
  renderHomeFeed();
  showToast("স্ট্যাটাস আপডেট সফল হয়েছে!");
}

function closeEditModal(event) {
  if (event && event.target !== event.currentTarget) return;
  document.getElementById("edit-post-modal").classList.remove("open");
}

// ==============================================================================
// CATEGORY MANAGEMENT
// ==============================================================================
function renderAdminCategoriesList() {
  const container = document.getElementById("admin-categories-list");
  if (!container) return;

  let html = "";
  appCategories.forEach(cat => {
    const postCount = appPosts.filter(p => p.categoryId === cat.id).length;
    html += `
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-md); margin-bottom: 8px;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 20px;">${cat.icon || '🏷️'}</span>
          <div>
            <div style="font-weight: 700; font-size: 14.5px;">${cat.name}</div>
            <div style="font-size: 11px; color: var(--text-muted);">${toBanglaNumber(postCount)}টি পোস্ট যুক্ত</div>
          </div>
        </div>

        <div style="display: flex; gap: 6px;">
          <button class="btn-secondary" style="font-size: 11px; padding: 4px 8px;" onclick="promptEditCategory('${cat.id}')">
            এডিট
          </button>
          <button class="btn-danger" style="font-size: 11px; padding: 4px 8px;" onclick="deleteCategoryConfirm('${cat.id}')">
            মুছুন
          </button>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

async function handleAddCategory() {
  const input = document.getElementById("new-category-name");
  const name = input.value.trim();
  if (!name) {
    alert("বিভাগের নাম লিখুন");
    return;
  }

  const id = "cat_" + Date.now();
  const newCat = {
    id: id,
    name: name,
    icon: "🏷️",
    color: "#4F46E5",
    bg: "#EEF2FF"
  };

  appCategories.push(newCat);
  saveLocalCategories();

  const fb = window.appFirebase;
  if (fb && fb.isConfigured() && fb.getDb()) {
    try {
      await fb.getDb().collection("categories").doc(id).set(newCat);
    } catch (e) {
      console.warn(e);
    }
  }

  input.value = "";
  renderAll();
  showToast("নতুন বিভাগ যুক্ত হয়েছে!");
}

async function promptEditCategory(catId) {
  const cat = appCategories.find(c => c.id === catId);
  if (!cat) return;

  const newName = prompt("বিভাগের নতুন নাম লিখুন:", cat.name);
  if (newName && newName.trim() && newName.trim() !== cat.name) {
    cat.name = newName.trim();
    saveLocalCategories();

    // Update posts categoryName
    appPosts.forEach(p => {
      if (p.categoryId === catId) p.categoryName = cat.name;
    });
    saveLocalPosts();

    const fb = window.appFirebase;
    if (fb && fb.isConfigured() && fb.getDb()) {
      try {
        await fb.getDb().collection("categories").doc(catId).update({ name: cat.name });
      } catch (e) {
        console.warn(e);
      }
    }

    renderAll();
    showToast("বিভাগের নাম পরিবর্তন করা হয়েছে");
  }
}

function deleteCategoryConfirm(catId) {
  if (confirm("Are you sure you want to delete this category?\nআপনি কি নিশ্চিতভাবে এই বিভাগটি ডিলিট করতে চান?")) {
    appCategories = appCategories.filter(c => c.id !== catId);
    saveLocalCategories();

    const fb = window.appFirebase;
    if (fb && fb.isConfigured() && fb.getDb()) {
      try {
        fb.getDb().collection("categories").doc(catId).delete();
      } catch (e) {
        console.warn(e);
      }
    }

    renderAll();
    showToast("বিভাগ মুছে ফেলা হয়েছে");
  }
}

function resetDefaultCategories() {
  if (confirm("ডিফল্ট ৯টি বিভাগ পুনরায় ফিরিয়ে আনতে চান?")) {
    appCategories = [...DEFAULT_CATEGORIES];
    saveLocalCategories();
    renderAll();
    showToast("ডিফল্ট বিভাগসমূহ ফিরিয়ে আনা হয়েছে");
  }
}

// ==============================================================================
// SETTINGS & FIREBASE CONFIG
// ==============================================================================
function updateFirebaseStatusBadge() {
  const badge = document.getElementById("firebase-connection-badge");
  if (!badge) return;

  const fb = window.appFirebase;
  if (fb && fb.isConfigured()) {
    badge.className = "badge-published";
    badge.textContent = "সংযুক্ত (Connected)";
  } else {
    badge.className = "badge-draft";
    badge.textContent = "ডেমো মোড (Local Demo Mode)";
  }
}

function initSettingsView() {
  updateFirebaseStatusBadge();
  const input = document.getElementById("live-firebase-config-input");
  const fb = window.appFirebase;
  if (input && fb) {
    input.value = JSON.stringify(fb.config, null, 2);
  }
}

function saveLiveFirebaseConfig() {
  const input = document.getElementById("live-firebase-config-input").value.trim();
  try {
    const parsed = JSON.parse(input);
    if (!parsed.apiKey || !parsed.projectId) {
      alert("সঠিক Firebase Config প্রদান করুন (কমপক্ষে apiKey এবং projectId থাকতে হবে)");
      return;
    }
    window.appFirebase.saveCustomConfig(parsed);
  } catch (err) {
    alert("ভুল JSON ফরম্যাট! অনুগ্রহ করে সঠিক Firebase Config পেস্ট করুন।");
  }
}

function resetLiveFirebaseConfig() {
  if (confirm("Firebase Config রিসেট করতে চান?")) {
    window.appFirebase.resetConfig();
  }
}

function copyFirestoreRules() {
  const rules = document.getElementById("firestore-rules-snippet").textContent;
  performCopy(rules);
  showToast("📋 সিকিউরিটি রুলস কপি করা হয়েছে!");
}

// ==============================================================================
// TOAST NOTIFICATIONS
// ==============================================================================
let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById("app-toast");
  const msgEl = document.getElementById("toast-message");
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add("show");

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}

// HTML Escaping Utility
function escapeHTML(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
