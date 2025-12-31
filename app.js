// =============================================================================
// DNA ANALYSIS DATABASE
// =============================================================================
const TRAIT_DATABASE = {
    // --- PHYSICAL APPEARANCE ---
    "rs12913832": {
        "trait": "Eye Color (Primary)", 
        "gene": "HERC2", 
        "category": "Physical", 
        "variants": {
            "AA": {"effect": "Brown eyes", "icon": "🟤", "score": 0, "simple": "You likely have dark eyes due to high melanin production."}, 
            "AG": {"effect": "Hazel/Green", "icon": "🟢", "score": 1, "simple": "You likely have lighter eyes, possibly hazel or green."}, 
            "GG": {"effect": "Blue eyes", "icon": "🔵", "score": 2, "simple": "You inherited the primary genetic marker for blue eyes."}
        }, 
        "confidence": "High"
    },
    "rs1800407": {
        "trait": "Eye Color Modifier", 
        "gene": "OCA2", 
        "category": "Physical", 
        "variants": {
            "GG": {"effect": "Darker pigment", "icon": "⚫", "score": 0, "simple": "Your genetics support darker pigmentation."}, 
            "GA": {"effect": "Lighter pigment", "icon": "🟡", "score": 1, "simple": "You carry one variant for lighter pigmentation."}, 
            "AA": {"effect": "Green eyes", "icon": "🟢", "score": 2, "simple": "This variant strongly increases the chance of green eyes."}
        }, 
        "confidence": "Medium"
    },
    "rs12821256": {
        "trait": "Blonde Hair", 
        "gene": "KITLG", 
        "category": "Physical", 
        "variants": {
            "TT": {"effect": "Blonde likely", "icon": "👱", "score": 2, "simple": "You have the classic marker associated with blonde hair."}, 
            "CT": {"effect": "Lighter hair", "icon": "🧑", "score": 1, "simple": "You carry a gene that lightens hair color."}, 
            "CC": {"effect": "Dark hair", "icon": "👩‍🦱", "score": 0, "simple": "Your genetics suggest naturally darker hair."}
        }, 
        "confidence": "Medium"
    },
    "rs1805007": {
        "trait": "Red Hair", 
        "gene": "MC1R", 
        "category": "Physical", 
        "variants": {
            "TT": {"effect": "Red hair likely", "icon": "👩‍🦰", "score": 2, "simple": "You have a strong genetic link to red hair and fair skin."}, 
            "CT": {"effect": "Carrier", "icon": "🧑‍🦰", "score": 1, "simple": "You carry the 'red hair gene' but might not have red hair yourself."}, 
            "CC": {"effect": "Absent", "icon": "🧑", "score": 0, "simple": "You do not carry this common red hair variant."}
        }, 
        "confidence": "High"
    },
    "rs1129038": {
        "trait": "Skin Pigmentation", 
        "gene": "HERC2", 
        "category": "Physical", 
        "variants": {
            "AA": {"effect": "Lighter skin", "icon": "🏻", "score": 0, "simple": "Your skin likely has less melanin, making it lighter."}, 
            "GG": {"effect": "Darker skin", "icon": "🏽", "score": 1, "simple": "Your skin tends to have more melanin protection."}
        }, 
        "confidence": "High"
    },
    "rs5400": {
        "trait": "Facial Aging", 
        "gene": "GLT25D1", 
        "category": "Physical", 
        "variants": {
            "TT": {"effect": "Typical aging", "icon": "👶", "score": 0, "simple": "Your skin likely ages at a typical rate."}, 
            "AA": {"effect": "Accelerated aging", "icon": "👴", "score": 1, "simple": "You may see signs of aging slightly earlier than average."}
        }, 
        "confidence": "Medium"
    },
    "rs12203592": {
        "trait": "Freckling (IRF4)", 
        "gene": "IRF4", 
        "category": "Physical", 
        "variants": {
            "TT": {"effect": "High freckling", "icon": "🧡", "score": 2, "simple": "You are very likely to have freckles."}, 
            "CT": {"effect": "Moderate", "icon": "🔸", "score": 1, "simple": "You have a moderate tendency to freckle."}, 
            "CC": {"effect": "Low", "icon": "⚪", "score": 0, "simple": "You are unlikely to have many freckles."}
        }, 
        "confidence": "High"
    },
    "rs61816761": {
        "trait": "Male Pattern Baldness", 
        "gene": "AR", 
        "category": "Physical", 
        "variants": {
            "AA": {"effect": "Higher risk", "icon": "👨‍🦲", "score": 1, "simple": "Men with this variant have a higher chance of hair loss."}, 
            "GG": {"effect": "Lower risk", "icon": "👨‍🦱", "score": 0, "simple": "You likely have a lower risk of early hair loss."}
        }, 
        "confidence": "High"
    },

    // --- NUTRITION & METABOLISM ---
    "rs762551": {
        "trait": "Caffeine Metabolism", 
        "gene": "CYP1A2", 
        "category": "Nutrition", 
        "variants": {
            "AA": {"effect": "Fast metabolizer", "icon": "⚡", "score": 2, "simple": "Caffeine clears your system quickly. You can likely drink coffee later in the day."}, 
            "AC": {"effect": "Slow metabolizer", "icon": "☕", "score": 1, "simple": "Caffeine lingers in your system. Afternoon coffee might affect your sleep."}, 
            "CC": {"effect": "Slow metabolizer", "icon": "🐢", "score": 0, "simple": "You process caffeine very slowly. It can stay in your body for a long time."}
        }, 
        "confidence": "High"
    },
    "rs671": {
        "trait": "Alcohol Flush", 
        "gene": "ALDH2", 
        "category": "Nutrition", 
        "variants": {
            "AA": {"effect": "Severe flush", "icon": "🔴", "score": 2, "simple": "Your body struggles to break down alcohol byproducts, causing immediate flushing."}, 
            "AG": {"effect": "Moderate flush", "icon": "😳", "score": 1, "simple": "You likely experience some facial redness when drinking alcohol."}, 
            "GG": {"effect": "No flush", "icon": "✅", "score": 0, "simple": "Your body metabolizes alcohol typically without flushing."}
        }, 
        "confidence": "High"
    },
    "rs4988235": {
        "trait": "Lactose Tolerance", 
        "gene": "LCT", 
        "category": "Nutrition", 
        "variants": {
            "TT": {"effect": "Tolerant", "icon": "🥛", "score": 1, "simple": "You can digest milk products into adulthood."}, 
            "TC": {"effect": "Tolerant", "icon": "🥛", "score": 1, "simple": "You are likely able to digest dairy without issues."}, 
            "CC": {"effect": "Intolerant", "icon": "🚫", "score": 0, "simple": "You likely have difficulty digesting milk sugar (lactose)."}
        }, 
        "confidence": "High"
    },
    "rs174537": {
        "trait": "Omega-3 Levels", 
        "gene": "FADS1", 
        "category": "Nutrition", 
        "variants": {
            "GG": {"effect": "Enhanced conversion", "icon": "🐟", "score": 1, "simple": "Your body is great at converting plant-based Omega-3s into usable forms."}, 
            "GT": {"effect": "Normal", "icon": "🐟", "score": 0, "simple": "You have typical efficiency in processing Omega-3 fatty acids."}, 
            "TT": {"effect": "Reduced conversion", "icon": "💊", "score": -1, "simple": "Your body struggles to convert plant Omega-3s. Fish oil might be beneficial."}
        }, 
        "confidence": "Medium"
    },
    "rs9939609": {
        "trait": "Obesity Risk (FTO)", 
        "gene": "FTO", 
        "category": "Nutrition", 
        "variants": {
            "AA": {"effect": "High risk", "icon": "⚖️", "score": 2, "simple": "You may have a higher genetic tendency towards higher body weight."}, 
            "AT": {"effect": "Moderate risk", "icon": "⚖️", "score": 1, "simple": "You have a slightly increased genetic risk for weight gain."}, 
            "TT": {"effect": "Average risk", "icon": "✅", "score": 0, "simple": "You do not carry the primary risk variant for obesity."}
        }, 
        "confidence": "High"
    },
    "rs1544410": {
        "trait": "Vitamin D Needs", 
        "gene": "VDR", 
        "category": "Nutrition", 
        "variants": {
            "AA": {"effect": "Higher needs", "icon": "☀️", "score": 1, "simple": "Your body may absorb Vitamin D less efficiently. Sunshine is extra important for you."}, 
            "GG": {"effect": "Normal absorption", "icon": "✅", "score": 0, "simple": "You have typical Vitamin D absorption capabilities."}
        }, 
        "confidence": "Medium"
    },
    "rs713598": {
        "trait": "Bitter Taste", 
        "gene": "TAS2R38", 
        "category": "Nutrition", 
        "variants": {
            "GG": {"effect": "Super-taster", "icon": "🥦", "score": 2, "simple": "Vegetables like broccoli likely taste intensely bitter to you."}, 
            "CC": {"effect": "Non-taster", "icon": "🍬", "score": 0, "simple": "You are less sensitive to bitter flavors in food."}
        }, 
        "confidence": "High"
    },

    // --- HEALTH & WELLNESS ---
    "rs429358": {
        "trait": "APOE-ε4", 
        "gene": "APOE", 
        "category": "Health", 
        "variants": {
            "CC": {"effect": "Increased risk", "icon": "🧠", "score": 1, "simple": "You carry a variant associated with cognitive decline risk. Healthy lifestyle is key."}, 
            "TC": {"effect": "Average risk", "icon": "✅", "score": 0, "simple": "You have a typical genetic risk profile for this marker."}, 
            "TT": {"effect": "Average risk", "icon": "✅", "score": 0, "simple": "You have a typical genetic risk profile for this marker."}
        }, 
        "confidence": "High"
    },
     "rs1333049": {
        "trait": "Coronary Heart Risk", 
        "gene": "9p21", 
        "category": "Health", 
        "variants": {
            "CC": {"effect": "Increased risk", "icon": "❤️", "score": 1, "simple": "This variant is linked to a higher risk of heart issues. Cardio is your friend."}, 
            "CG": {"effect": "Increased risk", "icon": "❤️", "score": 1, "simple": "You have one copy of a risk variant for heart health."}, 
            "GG": {"effect": "Average risk", "icon": "✅", "score": 0, "simple": "You do not carry this specific heart risk variant."}
        }, 
        "confidence": "High"
    },

    // --- COGNITIVE & PSYCHOLOGY ---
    "rs4680": {
        "trait": "Warrior vs Worrier", 
        "gene": "COMT", 
        "category": "Cognitive", 
        "variants": {
            "GG": {"effect": "Warrior", "icon": "⚔️", "score": 0, "simple": "You perform well under stress but might need more stimulation to focus."}, 
            "AA": {"effect": "Worrier", "icon": "🧠", "score": 1, "simple": "You have great attention to detail but may be more sensitive to stress."}, 
            "AG": {"effect": "Balanced", "icon": "⚖️", "score": 0.5, "simple": "You have a balanced response to stress and cognitive tasks."}
        }, 
        "confidence": "High"
    },
    "rs6265": {
        "trait": "Brain Plasticity", 
        "gene": "BDNF", 
        "category": "Cognitive", 
        "variants": {
            "CC": {"effect": "Normal plasticity", "icon": "💡", "score": 0, "simple": "Your brain adapts and learns typically."}, 
            "TT": {"effect": "Reduced plasticity", "icon": "📉", "score": 1, "simple": "Learning new motor skills might take a bit more repetition for you."}
        }, 
        "confidence": "High"
    },

    // --- SLEEP & CHRONOTYPE ---
    "rs4753426": {
        "trait": "Morning vs Evening", 
        "gene": "MTNR1B", 
        "category": "Sleep", 
        "variants": {
            "TT": {"effect": "Early bird", "icon": "🌅", "score": 0, "simple": "You likely find it easier to wake up early in the morning."}, 
            "CC": {"effect": "Night owl", "icon": "🌙", "score": 1, "simple": "You likely feel more alert later in the day."}
        }, 
        "confidence": "Medium"
    },

    // --- MUSCLE & PERFORMANCE ---
    "rs1815739": {
        "trait": "Muscle Composition", 
        "gene": "ACTN3", 
        "category": "Fitness", 
        "variants": {
            "CC": {"effect": "Sprinter", "icon": "🏃", "score": 1, "simple": "Your muscles are built for power and speed (fast-twitch)."}, 
            "TT": {"effect": "Endurance", "icon": "🚴", "score": 0, "simple": "Your muscles are built for endurance and stamina (slow-twitch)."}, 
            "TC": {"effect": "Mixed", "icon": "🤸", "score": 0.5, "simple": "You have a balanced mix of power and endurance muscle fibers."}
        }, 
        "confidence": "High"
    },
    // --- ADVANCED HEALTH & GENETICS ---
    "rs1801133": {
        "trait": "Methylation (MTHFR)", 
        "gene": "MTHFR", 
        "category": "Health", 
        "variants": {
            "TT": {"effect": "Reduced efficiency", "icon": "🧬", "score": 1, "simple": "Your body processes folate less efficiently. B-vitamins are important."}, 
            "CT": {"effect": "Slightly reduced", "icon": "🔸", "score": 0.5, "simple": "You have slightly reduced folate processing efficiency."}, 
            "CC": {"effect": "Normal efficiency", "icon": "✅", "score": 0, "simple": "You have typical MTHFR enzyme function."}
        }, 
        "confidence": "High"
    },
    "rs2395185": {
        "trait": "Celiac Disease Risk", 
        "gene": "HLA-DQ2.5", 
        "category": "Health", 
        "variants": {
            "TT": {"effect": "High Risk", "icon": "🌾", "score": 2, "simple": "You carry the primary risk factor for Celiac disease (gluten intolerance)."}, 
            "TG": {"effect": "Risk factor", "icon": "⚠️", "score": 1, "simple": "You carry one copy of the Celiac risk gene."}, 
            "GG": {"effect": "Low Risk", "icon": "✅", "score": 0, "simple": "You do not carry this specific Celiac risk variant."}
        }, 
        "confidence": "High"
    },
    "rs53576": {
        "trait": "Empathy (The Love Gene)", 
        "gene": "OXTR", 
        "category": "Cognitive", 
        "variants": {
            "GG": {"effect": "High Empathy", "icon": "🫂", "score": 2, "simple": "You likely have a natural ability to read emotions and feel empathy."}, 
            "AA": {"effect": "Logic-focused", "icon": "🧠", "score": 0, "simple": "You might handle stress well but may be less naturally empathetic."}, 
            "AG": {"effect": "Balanced", "icon": "⚖️", "score": 1, "simple": "You have a balance between emotional sensitivity and practicality."}
        }, 
        "confidence": "Medium" 
    },
    "rs1800955": {
        "trait": "Novelty Seeking", 
        "gene": "DRD4", 
        "category": "Cognitive", 
        "variants": {
            "CC": {"effect": "High seeker", "icon": "🎢", "score": 2, "simple": "You likely crave new experiences and excitement."}, 
            "CT": {"effect": "Moderate", "icon": "🎈", "score": 1, "simple": "You have a moderate interest in novelty and adventure."}, 
            "TT": {"effect": "Low seeker", "icon": "🏠", "score": 0, "simple": "You prefer routine and stability over novelty."}
        }, 
        "confidence": "Medium"
    },
    "rs7903146": {
         "trait": "Carb Sensitivity", 
         "gene": "TCF7L2", 
         "category": "Nutrition", 
         "variants": {
             "TT": {"effect": "High Risk", "icon": "🍞", "score": 1, "simple": "You may have higher blood sugar responses to carbohydrates."}, 
             "CC": {"effect": "Normal", "icon": "✅", "score": 0, "simple": "Your body handles carbohydrates typically."}
         },
         "confidence": "High"
    },
    "rs1801260": {
         "trait": "Circadian Rhythm", 
         "gene": "CLOCK", 
         "category": "Sleep", 
         "variants": {
             "TT": {"effect": "Early Riser", "icon": "🌅", "score": 1, "simple": "You are naturally inclined to wake up early."}, 
             "CC": {"effect": "Evening Person", "icon": "🌙", "score": 1, "simple": "You prefer staying up late and may struggle with early mornings."}
         },
         "confidence": "Medium"
    },
    "rs35874116": {
         "trait": "Sweet Tooth", 
         "gene": "TAS1R2", 
         "category": "Nutrition", 
         "variants": {
             "TT": {"effect": "High Preference", "icon": "🍭", "score": 1, "simple": "You likely have a strong preference for sugary foods."}, 
             "CC": {"effect": "Low Preference", "icon": "🥦", "score": 0, "simple": "You may not crave sweets as much as others."}
         },
         "confidence": "Medium"
    },
    "rs6323": {
         "trait": "Warrior Gene (MAOA)", 
         "gene": "MAOA", 
         "category": "Cognitive", 
         "variants": {
             "TT": {"effect": "High Activity", "icon": "🧘", "score": 0, "simple": "You break down stress hormones quickly, leading to calmness."}, 
             "GG": {"effect": "Low Activity", "icon": "⚔️", "score": 1, "simple": "You break down stress hormones slower, potentially increasing intensity."}
         },
         "confidence": "Medium"
    },
    "rs17822931": {
         "trait": "Body Odor / Earwax", 
         "gene": "ABCC11", 
         "category": "Physical", 
         "variants": {
             "CC": {"effect": "Wet Earwax", "icon": "👃", "score": 1, "simple": "You have wet earwax and potentially stronger body odor."}, 
             "TT": {"effect": "Dry Earwax", "icon": "✨", "score": 0, "simple": "You have dry earwax and likely no body odor (common in East Asians)."}
         },
         "confidence": "High"
    },
    // --- SENSORY & FUN TRAITS ---
    "rs72921001": {
        "trait": "Cilantro Taste",
        "gene": "OR6A2",
        "category": "Physical",
        "variants": {
            "CC": {"effect": "Soapy taste", "icon": "🧼", "score": 1, "simple": "Cilantro likely tastes like soap to you due to olfactory receptor sensitivity."},
            "AC": {"effect": "Soapy taste", "icon": "🧼", "score": 1, "simple": "You may find cilantro has a slightly soapy or chemical aftertaste."},
            "AA": {"effect": "Herbal taste", "icon": "🌿", "score": 0, "simple": "You likely taste cilantro as a fresh, herbal flavor."}
        },
        "confidence": "High"
    },
    "rs10427255": {
        "trait": "Photic Sneeze Reflex",
        "gene": "ZEB2",
        "category": "Physical",
        "variants": {
            "CC": {"effect": "Sun sneezer", "icon": "☀️", "score": 1, "simple": "You likely sneeze when suddenly exposed to bright sunlight (ACHOO syndrome)."},
            "CT": {"effect": "Likely sneezer", "icon": "🤧", "score": 1, "simple": "You have a higher chance of sneezing in bright light."},
            "TT": {"effect": "No reflex", "icon": "😎", "score": 0, "simple": "Bright light likely does not trigger a sneeze for you."}
        },
        "confidence": "Medium"
    },
    "rs13303010": {
        "trait": "Asparagus Odor Detection",
        "gene": "OR2M7",
        "category": "Physical",
        "variants": {
            "AA": {"effect": "Strong detection", "icon": "👃", "score": 1, "simple": "You can smell the distinct odor in urine after eating asparagus."},
            "GG": {"effect": "Nose blind", "icon": "🚫", "score": 0, "simple": "You likely cannot smell the specific metabolites from asparagus."},
            "AG": {"effect": "Moderate detection", "icon": "👃", "score": 0.5, "simple": "You may be able to smell the odor, but less intensely."}
        },
        "confidence": "High"
    },

    // --- NUTRITION & DEFICIENCIES ---
    "rs602662": {
        "trait": "Vitamin B12 Levels",
        "gene": "FUT2",
        "category": "Nutrition",
        "variants": {
            "AA": {"effect": "Lower absorption", "icon": "📉", "score": 1, "simple": "You are a 'non-secretor.' You may absorb B12 less efficiently in the gut."},
            "GG": {"effect": "Normal absorption", "icon": "🥩", "score": 0, "simple": "You are a 'secretor,' allowing for normal Vitamin B12 absorption."},
            "AG": {"effect": "Normal absorption", "icon": "✅", "score": 0, "simple": "You have typical B12 absorption levels."}
        },
        "confidence": "High"
    },
    "rs1800562": {
        "trait": "Iron Overload (Hemochromatosis)",
        "gene": "HFE",
        "category": "Health",
        "variants": {
            "AA": {"effect": "High Risk", "icon": "🩸", "score": 2, "simple": "You carry two copies of the C282Y variant. High risk of absorbing too much iron."},
            "AG": {"effect": "Carrier", "icon": "⚠️", "score": 1, "simple": "You are a carrier. You likely absorb iron well but should monitor levels."},
            "GG": {"effect": "Normal", "icon": "✅", "score": 0, "simple": "You have typical iron metabolism genetics."}
        },
        "confidence": "High"
    },
    "rs699": {
        "trait": "Salt Sensitivity",
        "gene": "AGT",
        "category": "Nutrition",
        "variants": {
            "GG": {"effect": "Sodium sensitive", "icon": "🧂", "score": 1, "simple": "Salt consumption may raise your blood pressure more than average."},
            "AA": {"effect": "Less sensitive", "icon": "✅", "score": 0, "simple": "Your blood pressure is less affected by sodium intake."}
        },
        "confidence": "Medium"
    },

    // --- FITNESS & PAIN ---
    "rs324420": {
        "trait": "Pain Tolerance & Anxiety",
        "gene": "FAAH",
        "category": "Cognitive",
        "variants": {
            "AA": {"effect": "High tolerance", "icon": "😌", "score": 0, "simple": "You may feel less anxiety and have higher pain tolerance (The 'Chill' Gene)."},
            "AC": {"effect": "Moderate", "icon": "⚖️", "score": 0.5, "simple": "You have a balanced response to pain and stress."},
            "CC": {"effect": "Normal sensitivity", "icon": "🧠", "score": 1, "simple": "You have typical sensitivity to physical pain and anxiety."}
        },
        "confidence": "Medium"
    },
    "rs8192678": {
        "trait": "Aerobic Capacity",
        "gene": "PPARGC1A",
        "category": "Fitness",
        "variants": {
            "AA": {"effect": "High endurance", "icon": "🏃", "score": 1, "simple": "Your mitochondria are efficient, boosting aerobic performance."},
            "GG": {"effect": "Normal", "icon": "✅", "score": 0, "simple": "You have baseline aerobic potential; training is key."}
        },
        "confidence": "Medium"
    },
    "rs12722": {
        "trait": "Tendon Injury Risk",
        "gene": "COL5A1",
        "category": "Fitness",
        "variants": {
            "TT": {"effect": "Reduced risk", "icon": "🛡️", "score": 0, "simple": "Your collagen structure suggests a lower risk of tendon injuries."},
            "CC": {"effect": "Increased risk", "icon": "🩹", "score": 1, "simple": "You may be more prone to Achilles tendon or ligament injuries."}
        },
        "confidence": "Medium"
    }
};

// =============================================================================
// APP LOGIC
// =============================================================================

// Drag & Drop Handlers
const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');

dropZone.addEventListener('click', () => fileInput.click());

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, unhighlight, false);
});

function highlight(e) {
    dropZone.classList.add('border-indigo-500', 'bg-slate-800');
}

function unhighlight(e) {
    dropZone.classList.remove('border-indigo-500', 'bg-slate-800');
}

dropZone.addEventListener('drop', handleDrop, false);
fileInput.addEventListener('change', (e) => handleFiles(e.target.files), false);

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files);
}

function handleFiles(files) {
    if (files.length > 0) {
        const file = files[0];
        document.getElementById('loadingOverlay').classList.remove('hidden');
        document.getElementById('loadingOverlay').classList.add('flex');
        
        // Use a slight timeout to render the loading state
        setTimeout(() => processFile(file), 100);
    }
}

function processFile(file) {
    const reader = new FileReader();

    reader.onload = function(e) {
        const text = e.target.result;
        const dnaData = parseDNA(text);
        // Check if parsing worked
        if (Object.keys(dnaData).length === 0) {
            alert("Error: No valid DNA data found in this file. Please ensure it is a raw DNA file (csv/txt) from MyHeritage, 23andMe, or Ancestry.");
            document.getElementById('loadingOverlay').classList.add('hidden');
            document.getElementById('loadingOverlay').classList.remove('flex');
            return;
        }

        const results = analyzeTraits(dnaData);
        renderReport(results, dnaData);
        
        // Hide loading
        document.getElementById('loadingOverlay').classList.add('hidden');
        document.getElementById('loadingOverlay').classList.remove('flex');
        
        // Show report
        document.getElementById('landingSection').classList.add('hidden');
        document.getElementById('reportSection').classList.remove('hidden');
    };

    reader.readAsText(file);
}

function parseDNA(text) {
    const lines = text.split(/\r?\n/);
    console.log('Rows found:', lines.length);
    const data = {};
    let count = 0;
    
    for (const line of lines) {
        if (line.startsWith('#') || line.trim() === '') continue;
        
        // Simple CSV splitting (handles various common formats)
        // Some formats: RSID, CHROMOSOME, POSITION, RESULT
        // Others might be Tab-separated
        const parts = line.replace(/"/g, '').split(/[\t,]+/);
        
        if (parts.length >= 4) {
            const rsid = parts[0].trim().toLowerCase();
            const result = parts[3].trim();
            
            if (rsid.startsWith('rs') && result && result !== '--' && result.length === 2) {
                data[rsid] = result;
                count++;
            }
        }
        
        // Update loading counter every 50k lines
        if (count % 50000 === 0) {
            document.getElementById('processedCount').innerText = count.toLocaleString();
        }
    }
    return data;
}

function analyzeTraits(dnaData) {
    const results = [];
    
    for (const [rsid, info] of Object.entries(TRAIT_DATABASE)) {
        const rsidLower = rsid.toLowerCase();
        
        if (dnaData[rsidLower]) {
            const genotype = dnaData[rsidLower];
            let variantInfo = info.variants[genotype];
            
            // Check reverse complement if direct match fails
            if (!variantInfo) {
                const reversed = genotype.split('').reverse().join('');
                variantInfo = info.variants[reversed];
            }
            
            if (variantInfo) {
                results.push({
                    ...info,
                    rsid: rsid,
                    genotype: genotype,
                    effect: variantInfo.effect,
                    icon: variantInfo.icon,
                    simple: variantInfo.simple || "No simplified explanation available.",
                    confidence: info.confidence
                });
            }
        }
    }
    return results;
}

function renderReport(results, dnaData) {
    // Update Stats
    document.getElementById('statSnps').innerText = Object.keys(dnaData).length.toLocaleString();
    document.getElementById('statTraits').innerText = results.length;
    
    // Group categories
    const categories = {};
    results.forEach(r => {
        if (!categories[r.category]) categories[r.category] = [];
        categories[r.category].push(r);
    });

    const contentDiv = document.getElementById('reportContent');
    const filterDiv = document.getElementById('categoryFilters');
    contentDiv.innerHTML = '';
    filterDiv.innerHTML = '';
    
    const iconMap = {
        "Physical": "👤", "Nutrition": "🥗", "Health": "❤️", 
        "Cognitive": "🧠", "Sleep": "🌙", "Fitness": "💪"
    };

    // Render Filters & Content
    for (const [cat, traits] of Object.entries(categories)) {
        // filter btn
        const btn = document.createElement('button');
        btn.className = 'w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between group hover:bg-slate-800 text-slate-400 hover:text-indigo-300';
        btn.innerHTML = `<span class="group-hover:translate-x-1 transition-transform">${cat}</span><span class="bg-slate-800 group-hover:bg-slate-700 px-2 py-0.5 rounded-md text-xs border border-slate-700 group-hover:border-slate-600 transition-colors">${traits.length}</span>`;
        btn.onclick = () => {
            document.getElementById('searchInput').value = cat; 
            filterTraits(cat);
        };
        filterDiv.appendChild(btn);

        // Section
        const section = document.createElement('section');
        section.className = 'mb-12 scroll-mt-28 category-section';
        section.id = cat;
        
        let cardsHtml = '';
        traits.forEach(t => {
            const confidenceColor = t.confidence === "High" ? "text-emerald-400 border-emerald-500/20 bg-emerald-500/5" : "text-amber-400 border-amber-500/20 bg-amber-500/5";
            
            cardsHtml += `
            <div class="trait-card p-7 rounded-2xl relative group" data-category="${t.category}">
                <div class="flex justify-between items-start mb-5">
                    <div class="flex items-center gap-4">
                        <span class="text-3xl filter drop-shadow-lg">${t.icon}</span>
                        <div>
                            <h4 class="font-bold text-xl text-slate-100">${t.trait}</h4>
                            <div class="text-xs text-slate-500 font-mono mt-0.5 flex items-center gap-2">
                                <span>${t.gene}</span>
                                <span class="w-1 h-1 rounded-full bg-slate-700"></span>
                                <span>${t.rsid}</span>
                            </div>
                        </div>
                    </div>
                    <div class="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${confidenceColor}">
                        ${t.confidence}
                    </div>
                </div>
                
                <div class="space-y-4">
                    <div class="flex items-center gap-4 bg-slate-900/50 p-3 rounded-xl border border-slate-800">
                        <span class="bg-indigo-500/10 text-indigo-400 px-3 py-1.5 rounded-lg font-mono text-sm font-bold border border-indigo-500/20 min-w-[3.5rem] text-center">
                            ${t.genotype}
                        </span>
                        <span class="font-semibold text-white/90 text-lg">
                            ${t.effect}
                        </span>
                    </div>
                    
                    <div class="text-sm text-slate-400 leading-relaxed pl-1 border-l-2 border-slate-700/50">
                        ${t.simple}
                    </div>
                </div>
            </div>`;
        });

        section.innerHTML = `
            <div class="flex items-end gap-4 mb-6 pb-4 border-b border-slate-800">
                <h2 class="text-2xl font-bold flex items-center gap-3 text-white">
                    <span class="text-2xl">${iconMap[cat] || '🧬'}</span>
                    ${cat}
                </h2>
                <span class="text-sm text-slate-500 font-medium pb-1 mb-0.5">${traits.length} traits</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                ${cardsHtml}
            </div>
        `;
        contentDiv.appendChild(section);
    }
}

// Search Logic
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (e) => filterTraits(e.target.value));

function filterTraits(query) {
    query = query.toLowerCase();
    
    // Filter cards
    document.querySelectorAll('.trait-card').forEach(card => {
        const text = card.textContent.toLowerCase();
        const cat = card.dataset.category ? card.dataset.category.toLowerCase() : '';
        // Match either text content OR category
        const match = text.includes(query) || cat.includes(query);
        card.style.display = match ? 'block' : 'none';
    });

    // Hide empty sections
    document.querySelectorAll('.category-section').forEach(section => {
        let hasVisible = false;
        section.querySelectorAll('.trait-card').forEach(c => {
            if (c.style.display !== 'none') hasVisible = true;
        });
        section.style.display = hasVisible ? 'block' : 'none';
    });
}



function resetApp() {
    document.getElementById('landingSection').classList.remove('hidden');
    document.getElementById('reportSection').classList.add('hidden');
    document.getElementById('fileInput').value = '';
}
