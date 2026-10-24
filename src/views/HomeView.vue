<script setup lang="ts">
import { ref } from 'vue';

const addr = ref<HTMLAnchorElement | null>(null);
const copyLabel = ref('Copy');
const EMAIL = 'amalia@bands.management';

function selectAddress() {
  if (!addr.value) return;
  const range = document.createRange();
  range.selectNodeContents(addr.value);
  const sel = window.getSelection();
  sel?.removeAllRanges();
  sel?.addRange(range);
  copyLabel.value = 'Selected';
}

async function copyMail() {
  try {
    await navigator.clipboard.writeText(EMAIL);
    copyLabel.value = 'Copied';
    setTimeout(() => (copyLabel.value = 'Copy'), 1600);
  } catch {
    selectAddress();
  }
}
</script>

<template>
  <header class="hero" id="top">
    <div class="wrap">
      <h1><span class="ln1">Amalia</span> <span class="ln2">Cicala</span></h1>
      <div class="hero-body">
        <div class="hero-text">
          <p class="hero-lede">I manage and market progressive and heavy bands, from the release plan and the ad budget to the merch table and the border crossing.</p>
          <div class="roles" aria-label="Disciplines"><span>Artist Management</span><span>Music Marketing</span><span>Touring</span><span>Photography</span></div>
          <p class="now">Based in <b>Milan</b>, working worldwide. Currently <b>Artist Manager at BANDS Management</b>, with artists from Italy, the USA, Norway, Australia, the Netherlands and Germany.</p>
          <div class="btns">
            <a class="btn solid" href="#work">See selected work</a>
            <a class="btn" href="#contact">Get in touch</a>
          </div>
        </div>
        <img class="portrait" src="/img/me/download.jpg" alt="Amalia Cicala at Download Festival" width="900" height="645">
      </div>
    </div>
  </header>

  <section class="block" id="about" aria-labelledby="about-h">
    <div class="wrap">
      <div class="sec-head">
        <div class="rail"><p class="label">What I do</p><figure class="rail-photo"><img src="/img/me/backstage-wide.jpg" alt="Amalia backstage with Benthos after a show" loading="lazy" width="900" height="600"></figure></div>
        <div>
          <h2 id="about-h">One person across the whole release cycle</h2>
          <p class="intro">Management comes first: finding the opportunities, planning each release and pushing it with the label and PR. From there I cover the marketing, the tour and the merch, so everything tells the same story.</p>
        </div>
      </div>
      <div class="services">
        <div class="svc"><h3>Artist management</h3><p>Finding opportunities, planning and managing releases, ideas and strategy for growth, and liaising with labels and PR.</p></div>
        <div class="svc"><h3>Marketing &amp; socials</h3><p>Marketing and social plans for every release and tour, and Meta campaigns for streams, awareness, tickets and merch, in English, Italian and German.</p></div>
        <div class="svc"><h3>Booking &amp; touring</h3><p>Booking festivals, shows and tours, then tour managing them: advancing, budgets, routing, travel, carnets and customs.</p></div>
        <div class="svc"><h3>Content &amp; merch</h3><p>Release copy, newsletters, captions, short-form video and graphics. Merch, physical releases and stock planning.</p></div>
      </div>
    </div>
  </section>

  <section class="block" id="roster" aria-labelledby="roster-h">
    <div class="wrap">
      <div class="sec-head">
        <div class="rail"><p class="label">Artists</p><figure class="rail-photo"><img src="/img/me/benthos-unprocessed-wall.jpg" alt="Amalia in front of Benthos and Unprocessed posters on a festival wall" loading="lazy" width="640" height="1138"><figcaption>Benthos and Unprocessed, side by side</figcaption></figure></div>
        <div>
          <h2 id="roster-h">Who I work with</h2>
          <p class="intro">Benthos I manage on my own, covering management, marketing, booking and tour management. The other artists I co-manage as part of the <a class="agency" href="https://bands.management" target="_blank" rel="noopener"><b>BANDS Management</b></a> team, working with them day to day on releases, campaigns, touring and merch. With the team I also run Leprous’s Patreon.</p>
          <div class="photo-row">
            <figure><img src="/img/me/voyager-euroblast.jpg" alt="Amalia backstage with Voyager at Euroblast" loading="lazy" width="900" height="600"><figcaption>Voyager, Euroblast</figcaption></figure>
            <figure><img src="/img/me/earthside-2.jpg" alt="Amalia backstage with Earthside" loading="lazy" width="900" height="600"><figcaption>Earthside</figcaption></figure>
            <figure><img src="/img/me/unprocessed-festival.jpg" alt="Amalia with Unprocessed and the team at a festival" loading="lazy" width="900" height="600"><figcaption>Unprocessed</figcaption></figure>
          </div>
        </div>
      </div>
      <div class="legend" aria-hidden="true"><span class="pill lead">Manager</span><span>sole management</span><span class="pill co">Co-manager</span><span>shared management, BANDS team</span><span class="pill sage">Patreon</span><span>supporter community, BANDS team</span></div>
      <ul class="roster">
        <li><span class="name">Benthos</span><span class="genre">Progressive metal, mathcore</span><span class="cc">ITA</span><span class="role"><span class="pill lead">Manager</span></span></li>
        <li><span class="name">Earthside</span><span class="genre">Progressive metal, post-rock, cinematic rock</span><span class="cc">USA</span><span class="role"><span class="pill co">Co-manager</span></span></li>
        <li><span class="name">Einar Solberg</span><span class="genre">Progressive rock, solo artist</span><span class="cc">NOR</span><span class="role"><span class="pill co">Co-manager</span></span></li>
        <li><span class="name">Caligula’s Horse</span><span class="genre">Progressive metal</span><span class="cc">AUS</span><span class="role"><span class="pill co">Co-manager</span></span></li>
        <li><span class="name">Textures</span><span class="genre">Progressive metal</span><span class="cc">NED</span><span class="role"><span class="pill co">Co-manager</span></span></li>
        <li><span class="name">Voyager</span><span class="genre">Progressive pop metal</span><span class="cc">AUS</span><span class="role"><span class="pill co">Co-manager</span></span></li>
        <li><span class="name">Unprocessed</span><span class="genre">Progressive metalcore, modern metal</span><span class="cc">GER</span><span class="role"><span class="pill co">Co-manager</span></span></li>
        <li><span class="name">Leprous</span><span class="genre">Progressive metal</span><span class="cc">NOR</span><span class="role"><span class="pill sage">Patreon</span></span></li>
      </ul>
    </div>
  </section>

  <section class="block" id="work" aria-labelledby="work-h">
    <div class="wrap">
      <div class="sec-head">
        <p class="label">Selected work</p>
        <div>
          <h2 id="work-h">Projects</h2>
          <p class="intro">Two projects that show the range of the job, from running a band end to end to releasing an album without a label.</p>
        </div>
      </div>

      <div class="cases">
        <article class="case">
          <div class="case-side">
            <span class="who">Benthos</span>
            <span class="yr">2024 – now</span>
            <span class="role-line">Sole manager</span>
            <div class="tags"><span class="pill">Management</span><span class="pill">Booking</span><span class="pill">Tour management</span><span class="pill">Paid social</span><span class="pill">Socials &amp; visuals</span></div>
            <figure class="rail-photo"><img src="/img/me/benthos-sony.jpg" alt="Amalia with Benthos outside Sony Music" loading="lazy" width="640" height="800"><figcaption>With Benthos at Sony Music</figcaption></figure>
            <figure class="rail-photo"><img src="/img/me/benthos-insideout.jpg" alt="Amalia with Benthos and the InsideOut Music team at the label office" loading="lazy" width="900" height="600"><figcaption>With Benthos and the InsideOut Music team</figcaption></figure>
          </div>
          <div>
            <h3><i>From Nothing</i>, and a first year on European stages</h3>
            <p class="summary">I run every side of the band: management, marketing, booking and the road. Since their InsideOut Music debut that has meant festival bills, major support tours and a first UK headline run.</p>
            <div class="case-cols">
              <div><h4>What I do</h4><ul>
                <li>Find opportunities and shape the plan for the band’s growth</li>
                <li>Manage releases with InsideOut Music and liaise with PR</li>
                <li>Plan the marketing and socials, and create their visuals</li>
                <li>Book their festivals, headline shows and support tours</li>
                <li>Tour manage on the road: advancing, budgets, logistics and customs</li>
                <li>Build and run Meta campaigns for streams and awareness as well as ticket sales, with copy in English, Italian and German</li>
                <li>Plan merch stock from past sell-through by show type</li>
              </ul></div>
              <div><h4>Results</h4><ul>
                <li><i>From Nothing</i> listed in Loudwire’s 11 Best Prog Metal Albums of 2025</li>
                <li>Metal Hammer UK print feature, with my band photo; “As A Cordyceps” shortlisted for its Best Metal Songs of 2025</li>
                <li>Four Prog Report Awards 2025 nominations, including Breakthrough of the Year, plus Progspace Awards nominations</li>
                <li>Kerrang! Radio play and a Guitar World Editors’ Pick</li>
                <li>Festivals including Euroblast, Midsummer Prog, RADAR and ArcTanGent</li>
                <li>Support slots with Between The Buried And Me, Protest The Hero, Stick To Your Guns and Haken</li>
              </ul></div>
            </div>
            <blockquote class="quote"><p>“Progressive post-hardcore at its finest.”</p><cite>Hive Magazine, RADAR Festival 2026</cite></blockquote>
          </div>
        </article>

        <article class="case">
          <div class="case-side">
            <span class="who">Unprocessed</span>
            <span class="yr">2025</span>
            <span class="role-line">Co-manager</span>
            <div class="tags"><span class="pill">Independent release</span><span class="pill">Physical &amp; retail</span><span class="pill">Fan events</span><span class="pill">Partnerships</span></div>
            <figure class="rail-photo"><img src="/img/me/unprocessed-release.jpg" alt="Amalia with Unprocessed and the team at the Angel release party in London" loading="lazy" width="900" height="600"><figcaption><i>Angel</i> release party, London</figcaption></figure>
          </div>
          <div>
            <h3>Releasing <i>Angel</i> without a label</h3>
            <p class="summary">Our biggest project together was <i>Angel</i>, an independent album, where the management team took on everything a label would normally do, then turned release week into a run of Halloween events.</p>
            <div class="case-cols">
              <div><h4>What we did</h4><ul>
                <li>Managed vinyl and CD manufacturing: three double-vinyl variants, CD and a deluxe box</li>
                <li>Set up retail with record shops and EMP</li>
                <li>Planned a week of release events across the UK and Germany</li>
                <li>Partnered with Schott on two custom Unprocessed wines, with wine tastings at the in-store signings</li>
                <li>Created a co-branded lager with Blondies Brewery, named after the track “Head in the Clouds”</li>
              </ul></div>
              <div><h4>Release week</h4><ul class="dates">
                <li><span>30 Oct</span>Halloween release party, Blondies Brewery, London</li>
                <li><span>31 Oct</span>In-store signing, Rough Trade West, London</li>
                <li><span>3 Nov</span>In-store signing, EMP, Leipzig</li>
                <li><span>4 Nov</span>In-store signing, Rough Trade, Berlin</li>
                <li><span>5 Nov</span>In-store signing, Cruise Records, Hamburg</li>
                <li><span>6 Nov</span>Halloween release party, Kreativfabrik, Wiesbaden</li>
              </ul></div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="block" id="cv" aria-labelledby="cv-h">
    <div class="wrap">
      <div class="sec-head">
        <p class="label">Experience</p>
        <div><h2 id="cv-h">Curriculum</h2></div>
      </div>
      <div class="cv">
        <ol class="timeline" reversed>
          <li><span class="when">2025 – now</span><div>
            <h3>Artist Manager</h3>
            <p class="org">BANDS Management · Worthing, UK · Full-time, hybrid</p>
            <p class="d">Sole manager of Benthos since 2024, covering management, marketing, booking and tour management. Co-manager of Earthside, Einar Solberg, Caligula’s Horse, Textures, Voyager and Unprocessed, working on releases, campaigns, touring and merch. Runs the Leprous Patreon with the team: content planning, posting, exclusive drops, community management and supporter merch.</p>
          </div></li>
          <li><span class="when">2020 – now</span><div>
            <h3>Music Marketing &amp; Digital Management</h3>
            <p class="org">Freelance · Remote</p>
            <p class="d">Services for independent artists alongside agency work:</p>
            <ul class="d-list">
              <li>Social media campaigns for visibility, streams and tour promotion</li>
              <li>Digital management, including content distribution and PRO support</li>
              <li>Design for promo materials, and photo and video content</li>
              <li>Coaching on fan growth, branding and messaging</li>
            </ul>
          </div></li>
          <li><span class="when">Freelance</span><div>
            <h3>Concert Photographer</h3>
            <p class="org">Independent</p>
            <p class="d">Live photography for bands and venues.</p>
          </div></li>
        </ol>
        <aside class="kit" aria-label="Toolkit">
          <div class="kit-group"><h3>Marketing</h3><div class="chips"><span>Meta Ads Manager</span><span>Meta Pixel</span><span>Google Ads</span><span>Google Analytics</span><span>SEO</span><span>Feature.fm</span><span>Bandsintown</span><span>Songkick</span></div></div>
          <div class="kit-group"><h3>Content</h3><div class="chips"><span>Photoshop</span><span>Illustrator</span><span>Lightroom</span><span>Premiere Pro</span><span>CapCut</span><span>Meta Business Suite</span><span>Mailchimp</span><span>YouTube Studio</span><span>Photography</span></div></div>
          <div class="kit-group"><h3>Operations</h3><div class="chips"><span>Google Workspace</span><span>Notion</span><span>Excel</span><span>Daysheets</span><span>Shopify</span><span>SumUp POS</span><span>Discord</span><span>ATA Carnet</span></div></div>
          <div class="kit-group"><h3>Languages</h3><div class="chips"><span>Italian · native</span><span>English · C2</span><span>German · B1</span></div></div>
        </aside>
      </div>

      <div class="volunteer" aria-labelledby="vol-h">
        <h3 class="sub-sm" id="vol-h">Volunteering</h3>
        <ul class="vol-list">
          <li>
            <span class="when-sm">2019 – 2024</span>
            <h4>Volunteer Steward</h4>
            <p class="org">ArcTanGent Festival, Bristol</p>
            <p class="d">Three editions as a volunteer steward, years before bringing Benthos to its stage in 2026.</p>
          </li>
          <li>
            <span class="when-sm">2019</span>
            <h4>Volunteer Steward</h4>
            <p class="org">Wallride Festival</p>
            <p class="d">Social media, ticket sales, info point, contest registrations and merch sales.</p>
          </li>
          <li>
            <span class="when-sm">2015 – 2016</span>
            <h4>Volunteer, Street Team</h4>
            <p class="org">Steven Wilson</p>
            <p class="d">Sold official merchandise, welcomed fans and processed payments at four shows across Italy and Germany.</p>
          </li>
        </ul>
      </div>

      <div class="edu" aria-labelledby="edu-h">
        <h3 class="sub" id="edu-h">Education</h3>
        <div class="edu-grid">
          <div class="edu-cards">
            <div class="degree">
            <p class="when-sm">2018 – 2021</p>
            <h4>BA (Hons) Commercial Music</h4>
            <p class="org">University of the West of Scotland</p>
            <p class="honours">First Class Honours</p>
            <ul>
              <li>Specialism: Music Business</li>
              <li>Scholarship for academic excellence</li>
            </ul>
          </div>
            <div class="degree alt">
              <p class="when-sm">2024</p>
              <h4>Event Production Programme</h4>
              <p class="org">Legend Club, Milan</p>
              <p class="honours">1 of 15 selected</p>
              <ul>
                <li>Artistic direction, event planning, pre-production, production and hospitality</li>
                <li>Organised two events at the venue</li>
                <li>Worked hospitality and production across the spring/summer 2024 programme</li>
              </ul>
            </div>
          </div>
          <div class="certs">
            <h4 class="sub-sm">Courses &amp; certifications</h4>
            <ul class="cert-list">
              <li><span>Concert Photography Masterclass</span><span class="by">Skillshare</span><span class="y">2024</span></li>
              <li><span>Google Analytics Individual Qualification</span><span class="by">Google</span><span class="y">2021</span></li>
              <li><span>Music Business Foundations</span><span class="by">Berklee Online</span><span class="y">2021</span></li>
              <li><span>Marketing</span><span class="by">Woom Italia</span><span class="y">2021</span></li>
              <li><span>Google Ads Display Certification</span><span class="by">Google</span><span class="y">2021</span></li>
              <li><span>Social Media Marketing Specialist</span><span class="by">Sudformazione</span><span class="y">2021</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="block" id="photo" aria-labelledby="photo-h">
    <div class="wrap">
      <div class="photo-band">
        <div>
          <h3 id="photo-h">Also behind the camera</h3>
          <p>Concert and music photographer based in Milan, shooting shows, festivals and press photos in Italy and on tour across Europe.</p>
        </div>
        <RouterLink class="btn" to="/photos">View photography →</RouterLink>
      </div>
    </div>
  </section>

  <section class="contact" id="contact" aria-labelledby="contact-h">
    <div class="wrap">
      <div class="contact-grid">
        <div>
          <p class="label">Contact</p>
          <h2 id="contact-h" class="contact-h">Working on a release or a tour? <em>Let’s talk.</em></h2>
          <p class="based">Based in Milan, Italy · Available worldwide</p>
          <div class="mail">
            <a ref="addr" class="addr" href="mailto:amalia@bands.management">amalia@bands.management</a>
            <button class="copy" id="copyMail" type="button" @click="copyMail">{{ copyLabel }}</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
