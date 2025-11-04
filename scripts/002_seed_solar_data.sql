-- Seed blog posts
INSERT INTO public.solar_blogs (title, slug, excerpt, content, image, author, category, read_time, published_date) VALUES
(
  'The Future of Solar Energy in India: Trends and Predictions for 2025',
  'future-of-solar-energy-india',
  'Explore the emerging trends shaping India''s solar energy landscape and what they mean for businesses and homeowners.',
  E'# The Future of Solar Energy in India\n\nIndia''s solar energy sector is experiencing unprecedented growth, driven by government initiatives, technological advancements, and increasing environmental awareness.\n\n## Key Trends for 2025\n\n### 1. Advanced Solar Technologies\n\nThe adoption of **TOPCon** and **HJT** (Heterojunction) technologies is revolutionizing solar panel efficiency:\n\n- TOPCon panels achieve up to 24% efficiency\n- HJT technology offers superior performance in high temperatures\n- Bifacial modules capture reflected light for additional energy generation\n\n### 2. Government Support\n\nIndia''s commitment to renewable energy includes:\n\n| Initiative | Target | Timeline |\n|-----------|--------|----------|\n| Solar Capacity | 500 GW | 2030 |\n| Green Hydrogen | 5 MMT | 2030 |\n| PLI Scheme | ₹24,000 Cr | Ongoing |\n\n### 3. Cost Reduction\n\nSolar energy costs have decreased by **89%** over the past decade, making it more accessible than ever.\n\n> "Solar energy is no longer an alternative—it''s the primary choice for sustainable power generation." - Industry Expert\n\n## Impact on Businesses\n\nBusinesses adopting solar energy can:\n\n1. Reduce electricity costs by up to 70%\n2. Achieve carbon neutrality goals\n3. Benefit from tax incentives and subsidies\n4. Enhance corporate sustainability credentials\n\n## Conclusion\n\nThe future of solar energy in India is bright, with technological innovations and supportive policies paving the way for widespread adoption.',
  '/solar-panels-on-green-factory-roof-with-trees.jpg',
  'Shweta Solar Team',
  'Industry Insights',
  8,
  NOW() - INTERVAL '2 days'
),
(
  'TOPCon vs PERC: Understanding Next-Generation Solar Technology',
  'topcon-vs-perc-technology',
  'A comprehensive comparison of TOPCon and PERC solar panel technologies to help you make informed decisions.',
  E'# TOPCon vs PERC: The Technology Showdown\n\n## What is PERC Technology?\n\n**PERC** (Passivated Emitter and Rear Cell) has been the industry standard for years:\n\n- Efficiency: 20-22%\n- Proven reliability\n- Cost-effective manufacturing\n- Wide availability\n\n## Introducing TOPCon\n\n**TOPCon** (Tunnel Oxide Passivated Contact) represents the next evolution:\n\n### Key Advantages\n\n1. **Higher Efficiency**: 23-25% conversion rates\n2. **Better Temperature Coefficient**: Superior performance in hot climates\n3. **Lower Degradation**: Maintains efficiency longer\n4. **Bifacial Capability**: Enhanced energy capture\n\n## Performance Comparison\n\n```\nMetric          | PERC    | TOPCon\n----------------|---------|--------\nEfficiency      | 20-22%  | 23-25%\nDegradation/yr  | 0.5%    | 0.4%\nTemp Coeff      | -0.37%  | -0.30%\nLifespan        | 25 yrs  | 30+ yrs\n```\n\n## Which Should You Choose?\n\n### Choose PERC if:\n- Budget is a primary concern\n- Standard efficiency meets your needs\n- Proven technology is preferred\n\n### Choose TOPCon if:\n- Maximum efficiency is required\n- Long-term ROI is prioritized\n- Future-proofing your investment\n\n## Shweta Solar''s Recommendation\n\nAt Shweta Solar, we manufacture both PERC and TOPCon panels. For most commercial applications, **TOPCon offers superior long-term value** despite the slightly higher initial investment.\n\n![Solar Panel Comparison](/topcon-solar-panel-advanced.jpg)\n\n## Conclusion\n\nWhile PERC remains a solid choice, TOPCon technology represents the future of solar energy with its superior efficiency and longevity.',
  '/topcon-solar-panel-advanced.jpg',
  'Technical Team',
  'Technology',
  6,
  NOW() - INTERVAL '5 days'
),
(
  'Sustainability in Solar Manufacturing: Our Commitment to the Environment',
  'sustainability-manufacturing',
  'Learn how Shweta Solar integrates sustainable practices throughout our manufacturing process.',
  E'# Sustainability in Solar Manufacturing\n\n## Our Environmental Commitment\n\nAt Shweta Solar, sustainability isn''t just about the products we make—it''s about **how** we make them.\n\n### Manufacturing Excellence\n\nOur state-of-the-art facility incorporates:\n\n- **100% renewable energy** for production\n- **Zero liquid discharge** water management\n- **Circular economy** principles in material sourcing\n- **Carbon-neutral** manufacturing processes\n\n## Key Initiatives\n\n### 1. Green Energy Production\n\n> Our manufacturing facility is powered entirely by solar energy, making us one of the few truly carbon-neutral solar panel manufacturers in India.\n\n### 2. Waste Reduction\n\nWe''ve achieved:\n\n- 95% reduction in manufacturing waste\n- 100% recycling of silicon wafer scraps\n- Zero hazardous waste to landfills\n\n### 3. Sustainable Supply Chain\n\n| Component | Sustainability Measure |\n|-----------|------------------------|\n| Silicon | Ethically sourced, conflict-free |\n| Glass | 30% recycled content |\n| Aluminum | 100% recyclable frames |\n| Packaging | Biodegradable materials |\n\n## Environmental Impact\n\nEach Shweta Solar panel installed:\n\n1. **Offsets 1.5 tons of CO₂** annually\n2. **Equivalent to planting 50 trees** per year\n3. **Saves 2,000 liters of water** compared to conventional energy\n\n## Certifications\n\nWe maintain the highest environmental standards:\n\n- ISO 14001 Environmental Management\n- ISO 50001 Energy Management\n- Carbon Trust Standard\n- Green Pro Certification\n\n![Green Manufacturing](/green-factory-with-solar-panels.jpg)\n\n## Looking Ahead\n\nOur 2030 sustainability goals:\n\n- Achieve net-negative carbon emissions\n- 100% circular economy in manufacturing\n- Zero waste to landfill\n- Water-positive operations\n\n## Conclusion\n\nSustainability is at the core of everything we do. When you choose Shweta Solar, you''re not just investing in clean energy—you''re supporting a truly sustainable future.',
  '/green-factory-with-solar-panels.jpg',
  'Sustainability Team',
  'Sustainability',
  7,
  NOW() - INTERVAL '1 week'
);

-- Seed gallery items
INSERT INTO public.solar_gallery (title, description, folder, images, event_date) VALUES
(
  'Factory Inauguration 2024',
  'Grand opening of our state-of-the-art manufacturing facility',
  'Factory Launch',
  '[
    {"url": "/images/gallery-1.jpg", "caption": "Ribbon cutting ceremony"},
    {"url": "/images/gallery-2.jpg", "caption": "Factory exterior view"},
    {"url": "/placeholder.svg?height=400&width=600", "caption": "Production line"},
    {"url": "/placeholder.svg?height=400&width=600", "caption": "Quality control"}
  ]'::jsonb,
  NOW() - INTERVAL '3 months'
),
(
  'Team Building Event 2024',
  'Annual team gathering and celebration',
  'Company Events',
  '[
    {"url": "/placeholder.svg?height=400&width=600", "caption": "Team photo"},
    {"url": "/placeholder.svg?height=400&width=600", "caption": "Event highlights"},
    {"url": "/placeholder.svg?height=400&width=600", "caption": "Team activities"}
  ]'::jsonb,
  NOW() - INTERVAL '2 months'
),
(
  'Solar Installation Projects',
  'Completed solar installations across India',
  'Projects',
  '[
    {"url": "/placeholder.svg?height=400&width=600", "caption": "Commercial rooftop"},
    {"url": "/placeholder.svg?height=400&width=600", "caption": "Solar farm project"},
    {"url": "/placeholder.svg?height=400&width=600", "caption": "Residential installation"}
  ]'::jsonb,
  NOW() - INTERVAL '1 month'
);

-- Seed news items
INSERT INTO public.solar_news (title, content, published_date) VALUES
(
  'Shweta Solar Announces 1.2GW Manufacturing Capacity Expansion',
  'We are thrilled to announce the expansion of our manufacturing capacity to 1.2GW, reinforcing our position as a leading solar panel manufacturer in India. This expansion will create 500+ new jobs and enable us to meet the growing demand for high-efficiency TOPCon solar panels.',
  NOW() - INTERVAL '1 day'
),
(
  'New TOPCon Technology Line Operational',
  'Our state-of-the-art TOPCon manufacturing line is now fully operational, producing glass-to-glass solar panels with industry-leading efficiency ratings of up to 24.5%. This positions Shweta Solar at the forefront of solar technology innovation.',
  NOW() - INTERVAL '1 week'
),
(
  'ISO 14001 Environmental Certification Achieved',
  'Shweta Solar has successfully achieved ISO 14001 Environmental Management System certification, demonstrating our commitment to sustainable manufacturing practices and environmental responsibility.',
  NOW() - INTERVAL '2 weeks'
),
(
  'Partnership with Leading EPC Companies',
  'We have signed strategic partnerships with top EPC companies across India to supply our premium solar panels for large-scale commercial and utility projects. This collaboration will accelerate India''s renewable energy transition.',
  NOW() - INTERVAL '3 weeks'
),
(
  'Q4 2024 Production Milestone Reached',
  'Shweta Solar has successfully produced 100,000+ solar panels in Q4 2024, marking a significant milestone in our journey. We thank our dedicated team and valued partners for making this achievement possible.',
  NOW() - INTERVAL '1 month'
);
