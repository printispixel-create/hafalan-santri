// =====================================================
// DATA SURAH PER JUZ (statis)
// =====================================================
const surahData = {
    30: [
        { nama: "An-Naba' (1-40)",            key: "naba_1_40" },
        { nama: "An-Nazi'at (1-46)",          key: "naziat_1_46" },
        { nama: "'Abasa (1-42)",              key: "abasa_1_42" },
        { nama: "At-Takwir (1-29)",           key: "takwir_1_29" },
        { nama: "Al-Infitar (1-19)",          key: "infitar_1_19" },
        { nama: "Al-Mutaffifin (1-36)",       key: "mutaffifin_1_36" },
        { nama: "Al-Insyiqaq (1-25)",         key: "insyiqaq_1_25" },
        { nama: "Al-Buruj (1-22)",            key: "buruj_1_22" },
        { nama: "At-Tariq (1-17)",            key: "tariq_1_17" },
        { nama: "Al-A'la (1-19)",             key: "ala_1_19" },
        { nama: "Al-Ghasyiyah (1-26)",        key: "ghasyiyah_1_26" },
        { nama: "Al-Fajr (1-30)",             key: "fajr_1_30" },
        { nama: "Al-Balad (1-20)",            key: "balad_1_20" },
        { nama: "Asy-Syams (1-15)",           key: "syams_1_15" },
        { nama: "Al-Lail (1-21)",             key: "lail_1_21" },
        { nama: "Ad-Dhuha (1-11)",            key: "dhuha_1_11" },
        { nama: "Asy-Syarh (1-8)",            key: "syarh_1_8" },
        { nama: "At-Tin (1-8)",               key: "tin_1_8" },
        { nama: "Al-'Alaq (1-19)",            key: "alaq_1_19" },
        { nama: "Al-Qadr (1-5)",              key: "qadr_1_5" },
        { nama: "Al-Bayyinah (1-8)",          key: "bayyinah_1_8" },
        { nama: "Az-Zalzalah (1-8)",          key: "zalzalah_1_8" },
        { nama: "Al-'Adiyat (1-11)",          key: "adiyat_1_11" },
        { nama: "Al-Qari'ah (1-11)",          key: "qariah_1_11" },
        { nama: "At-Takatsur (1-8)",          key: "takatsur_1_8" },
        { nama: "Al-'Asr (1-3)",              key: "asr_1_3" },
        { nama: "Al-Humazah (1-9)",           key: "humazah_1_9" },
        { nama: "Al-Fil (1-5)",               key: "fil_1_5" },
        { nama: "Quraisy (1-4)",              key: "quraisy_1_4" },
        { nama: "Al-Ma'un (1-7)",             key: "maun_1_7" },
        { nama: "Al-Kautsar (1-3)",           key: "kautsar_1_3" },
        { nama: "Al-Kafirun (1-6)",           key: "kafirun_1_6" },
        { nama: "An-Nasr (1-3)",              key: "nasr_1_3" },
        { nama: "Al-Lahab (1-5)",             key: "lahab_1_5" },
        { nama: "Al-Ikhlas (1-4)",            key: "ikhlas_1_4" },
        { nama: "Al-Falaq (1-5)",             key: "falaq_1_5" },
        { nama: "An-Nas (1-6)",               key: "nas_1_6" }
    ],
    29: [
        { nama: "Al-Mursalat (1-25)",         key: "mursalat_1_25" },
        { nama: "Al-Mursalat (26-50)",        key: "mursalat_26_50" },
        { nama: "Al-Insan (1-16)",            key: "insan_1_16" },
        { nama: "Al-Insan (17-31)",           key: "insan_17_31" },
        { nama: "Al-Qiyamah (1-20)",          key: "qiyamah_1_20" },
        { nama: "Al-Qiyamah (21-40)",         key: "qiyamah_21_40" },
        { nama: "Al-Muddatstsir (1-33)",      key: "muddatstsir_1_33" },
        { nama: "Al-Muddatstsir (34-56)",     key: "muddatstsir_34_56" },
        { nama: "Al-Muzzammil (1-15)",        key: "muzzammil_1_15" },
        { nama: "Al-Muzzammil (16-20)",       key: "muzzammil_16_20" },
        { nama: "Al-Jinn (1-13)",             key: "jinn_1_13" },
        { nama: "Al-Jinn (14-28)",            key: "jinn_14_28" },
        { nama: "Nuh (1-14)",                 key: "nuh_1_14" },
        { nama: "Nuh (15-28)",                key: "nuh_15_28" },
        { nama: "Al-Ma'arij (1-22)",          key: "maarij_1_22" },
        { nama: "Al-Ma'arij (23-44)",         key: "maarij_23_44" },
        { nama: "Al-Haqqah (1-21)",           key: "haqqah_1_21" },
        { nama: "Al-Haqqah (22-52)",          key: "haqqah_22_52" },
        { nama: "Al-Qalam (1-10)",            key: "qalam_1_10" },
        { nama: "Al-Qalam (11-25)",           key: "qalam_11_25" },
        { nama: "Al-Qalam (26-38)",           key: "qalam_26_38" },
        { nama: "Al-Qalam (39-43)",           key: "qalam_39_43" },
        { nama: "Al-Qalam (44-52)",           key: "qalam_44_52" },
        { nama: "Al-Mulk (1-6)",              key: "mulk_1_6" },
        { nama: "Al-Mulk (7-12)",             key: "mulk_7_12" },
        { nama: "Al-Mulk (13-18)",            key: "mulk_13_18" },
        { nama: "Al-Mulk (19-22)",            key: "mulk_19_22" },
        { nama: "Al-Mulk (23-30)",            key: "mulk_23_30" }
    ],
    1: [
        { nama: "Al-Fatihah (1-7)",           key: "fatihah_1_7" },
        { nama: "Al-Baqarah (1-9)",           key: "baqarah_1_9" },
        { nama: "Al-Baqarah (10-16)",         key: "baqarah_10_16" },
        { nama: "Al-Baqarah (17-21)",         key: "baqarah_17_21" },
        { nama: "Al-Baqarah (22-27)",         key: "baqarah_22_27" },
        { nama: "Al-Baqarah (28-33)",         key: "baqarah_28_33" },
        { nama: "Al-Baqarah (34-39)",         key: "baqarah_34_39" },
        { nama: "Al-Baqarah (40-45)",         key: "baqarah_40_45" },
        { nama: "Al-Baqarah (46-50)",         key: "baqarah_46_50" },
        { nama: "Al-Baqarah (51-55)",         key: "baqarah_51_55" },
        { nama: "Al-Baqarah (56-60)",         key: "baqarah_56_60" },
        { nama: "Al-Baqarah (61-65)",         key: "baqarah_61_65" },
        { nama: "Al-Baqarah (66-70)",         key: "baqarah_66_70" },
        { nama: "Al-Baqarah (71-75)",         key: "baqarah_71_75" },
        { nama: "Al-Baqarah (76-80)",         key: "baqarah_76_80" },
        { nama: "Al-Baqarah (81-85)",         key: "baqarah_81_85" },
        { nama: "Al-Baqarah (86-90)",         key: "baqarah_86_90" },
        { nama: "Al-Baqarah (91-95)",         key: "baqarah_91_95" },
        { nama: "Al-Baqarah (96-100)",        key: "baqarah_96_100" },
        { nama: "Al-Baqarah (101-105)",       key: "baqarah_101_105" },
        { nama: "Al-Baqarah (106-110)",       key: "baqarah_106_110" },
        { nama: "Al-Baqarah (111-115)",       key: "baqarah_111_115" },
        { nama: "Al-Baqarah (116-120)",       key: "baqarah_116_120" },
        { nama: "Al-Baqarah (121-125)",       key: "baqarah_121_125" },
        { nama: "Al-Baqarah (126-141)",       key: "baqarah_126_141" }
    ],
    2: [
        { nama: "Al-Baqarah (142-145)",       key: "baqarah_142_145" },
        { nama: "Al-Baqarah (146-149)",       key: "baqarah_146_149" },
        { nama: "Al-Baqarah (150-153)",       key: "baqarah_150_153" },
        { nama: "Al-Baqarah (154-157)",       key: "baqarah_154_157" },
        { nama: "Al-Baqarah (158-161)",       key: "baqarah_158_161" },
        { nama: "Al-Baqarah (162-165)",       key: "baqarah_162_165" },
        { nama: "Al-Baqarah (166-169)",       key: "baqarah_166_169" },
        { nama: "Al-Baqarah (170-173)",       key: "baqarah_170_173" },
        { nama: "Al-Baqarah (174-177)",       key: "baqarah_174_177" },
        { nama: "Al-Baqarah (178-181)",       key: "baqarah_178_181" },
        { nama: "Al-Baqarah (182-185)",       key: "baqarah_182_185" },
        { nama: "Al-Baqarah (186-189)",       key: "baqarah_186_189" },
        { nama: "Al-Baqarah (190-193)",       key: "baqarah_190_193" },
        { nama: "Al-Baqarah (194-197)",       key: "baqarah_194_197" },
        { nama: "Al-Baqarah (198-201)",       key: "baqarah_198_201" },
        { nama: "Al-Baqarah (202-205)",       key: "baqarah_202_205" },
        { nama: "Al-Baqarah (206-209)",       key: "baqarah_206_209" },
        { nama: "Al-Baqarah (210-213)",       key: "baqarah_210_213" },
        { nama: "Al-Baqarah (214-217)",       key: "baqarah_214_217" },
        { nama: "Al-Baqarah (218-221)",       key: "baqarah_218_221" },
        { nama: "Al-Baqarah (222-225)",       key: "baqarah_222_225" },
        { nama: "Al-Baqarah (226-229)",       key: "baqarah_226_229" },
        { nama: "Al-Baqarah (230-233)",       key: "baqarah_230_233" },
        { nama: "Al-Baqarah (234-237)",       key: "baqarah_234_237" },
        { nama: "Al-Baqarah (238-241)",       key: "baqarah_238_241" },
        { nama: "Al-Baqarah (242-245)",       key: "baqarah_242_245" },
        { nama: "Al-Baqarah (246-249)",       key: "baqarah_246_249" },
        { nama: "Al-Baqarah (250-252)",       key: "baqarah_250_252" }
    ],
    3: [
        { nama: "Al-Baqarah (253-257)",       key: "baqarah_253_257" },
        { nama: "Al-Baqarah (258-262)",       key: "baqarah_258_262" },
        { nama: "Al-Baqarah (263-267)",       key: "baqarah_263_267" },
        { nama: "Al-Baqarah (268-272)",       key: "baqarah_268_272" },
        { nama: "Al-Baqarah (273-277)",       key: "baqarah_273_277" },
        { nama: "Al-Baqarah (278-282)",       key: "baqarah_278_282" },
        { nama: "Al-Baqarah (283-286)",       key: "baqarah_283_286" },
        { nama: "Ali 'Imran (1-4)",           key: "imran_1_4" },
        { nama: "Ali 'Imran (5-9)",           key: "imran_5_9" },
        { nama: "Ali 'Imran (10-14)",         key: "imran_10_14" },
        { nama: "Ali 'Imran (15-19)",         key: "imran_15_19" },
        { nama: "Ali 'Imran (20-24)",         key: "imran_20_24" },
        { nama: "Ali 'Imran (25-29)",         key: "imran_25_29" },
        { nama: "Ali 'Imran (30-34)",         key: "imran_30_34" },
        { nama: "Ali 'Imran (35-39)",         key: "imran_35_39" },
        { nama: "Ali 'Imran (40-44)",         key: "imran_40_44" },
        { nama: "Ali 'Imran (45-49)",         key: "imran_45_49" },
        { nama: "Ali 'Imran (50-54)",         key: "imran_50_54" },
        { nama: "Ali 'Imran (55-59)",         key: "imran_55_59" },
        { nama: "Ali 'Imran (60-64)",         key: "imran_60_64" },
        { nama: "Ali 'Imran (65-69)",         key: "imran_65_69" },
        { nama: "Ali 'Imran (70-74)",         key: "imran_70_74" },
        { nama: "Ali 'Imran (75-77)",         key: "imran_75_77" },
        { nama: "Ali 'Imran (78-80)",         key: "imran_78_80" },
        { nama: "Ali 'Imran (81-83)",         key: "imran_81_83" },
        { nama: "Ali 'Imran (84-86)",         key: "imran_84_86" },
        { nama: "Ali 'Imran (87-89)",         key: "imran_87_89" },
        { nama: "Ali 'Imran (90-91)",         key: "imran_90_91" },
        { nama: "Ali 'Imran (92)",            key: "imran_92" }
    ]
};

const JUZ_LIST = [30, 29, 1, 2, 3];
const KELAS_LIST = ['awwal', 'tsani', 'tsalis'];

const STAGES = [
    { id: 'setor',  label: 'Setor',  scope: 'surah' },
    { id: 'takrir', label: 'Takrir', scope: 'surah' },
    { id: 'tasmi',  label: "Tasmi' & Ikhtibar", scope: 'juz' }
];

// =====================================================
// KONSTANTA STORAGE
// =====================================================
const LS_SISWA_KEY = 'hafalan_siswa_v2';
const LS_DEVICE_KEY = 'hafalan_device_meta';
const LS_META_PREFIX = 'hafalan_meta_';
const LS_TOMBSTONE_SISWA = 'hafalan_tombstone_siswa_';
const LS_RESURRECT_SISWA = 'hafalan_resurrect_siswa_';
const LS_TOMBSTONE_RECORD = 'hafalan_tombstone_record_';
const LS_SEEDED_FLAG = 'hafalan_seeded_v1';   // BARU: flag default sudah dimuat

// =====================================================
// IDENTITAS PERANGKAT
// =====================================================
function getDeviceMeta() {
    try {
        const raw = localStorage.getItem(LS_DEVICE_KEY);
        if (raw) return JSON.parse(raw);
    } catch (e) {}
    const meta = {
        deviceId: 'dev_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 8),
        deviceName: '',
        createdAt: new Date().toISOString()
    };
    localStorage.setItem(LS_DEVICE_KEY, JSON.stringify(meta));
    return meta;
}

function setDeviceName(name) {
    const meta = getDeviceMeta();
    meta.deviceName = String(name || '').trim().slice(0, 40);
    localStorage.setItem(LS_DEVICE_KEY, JSON.stringify(meta));
    return meta;
}

// =====================================================
// MANAJEMEN SISWA
// =====================================================
const DEFAULT_SISWA = {
    awwal: [
        "Alfin Khaer", "Faqih Al Fanani", "Gian Aditiya", "Haikal Ramdani",
        "Ibad Ghalib Ibadurrahman", "Maulana Malik Ibrahim", "M. Rifki Kiantara",
        "M. Mujiburrahman", "Nauval Riski Pratama", "Restu Maulana", "Supardi"
    ],
    tsani: [
        "A.Iqbal dimiski", "A.Hasbiallah", "Diki Suandi", "M.Sadim Ramdani",
        "Mizwardi", "M.Rifki Al-Farabi", "M.Jefri Wahyuda", "Maulana abidaen",
        "M. Nauval Maulana", "Pathul Huda", "Riski Hidayat"
    ],
    tsalis: [
        "Abdullah sadim", "Kasyfi Yazid", "M. Khidir Rafsanzani", "M. Radit Gustiawan",
        "M. Ziat karomi", "M. Odi Ramdani", "Riki Alvian Pratama", "Ramdani",
        "Shufyan Majdi", "Shahibul Yamin", "Syukron Jazila", "Ulul Azmi Ali", "Ziat Firmana"
    ]
};

function _isSeeded() {
    return localStorage.getItem(LS_SEEDED_FLAG) === '1';
}

function _markSeeded() {
    try { localStorage.setItem(LS_SEEDED_FLAG, '1'); } catch (e) {}
}

/**
 * Muat data siswa.
 * - Jika key LS_SISWA_KEY sudah ada → pakai itu (localStorage adalah sumber kebenaran).
 * - Jika belum ada DAN belum pernah di-seed → isi dengan DEFAULT_SISWA + set flag.
 * - Jika belum ada DAN sudah pernah di-seed (mis. user hapus semua siswa via clear) → kosong.
 */
function loadSiswaData() {
    try {
        const raw = localStorage.getItem(LS_SISWA_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed && typeof parsed === 'object') {
                KELAS_LIST.forEach(k => { if (!Array.isArray(parsed[k])) parsed[k] = []; });
                return parsed;
            }
        }
    } catch (e) {}

    // Belum ada key
    if (!_isSeeded()) {
        // Pertama kali → seed default
        const def = JSON.parse(JSON.stringify(DEFAULT_SISWA));
        localStorage.setItem(LS_SISWA_KEY, JSON.stringify(def));
        _markSeeded();
        return def;
    }
    // Sudah pernah di-seed tapi key hilang (mis. dihapus manual) → kosong
    const empty = { awwal: [], tsani: [], tsalis: [] };
    localStorage.setItem(LS_SISWA_KEY, JSON.stringify(empty));
    return empty;
}

function saveSiswaData(data) {
    localStorage.setItem(LS_SISWA_KEY, JSON.stringify(data));
}

function getAllSiswa() { return loadSiswaData(); }
function getSiswaList(kelas) { return (loadSiswaData()[kelas] || []).slice(); }

function _safeName(nama) {
    return String(nama).replace(/\s+/g, '_');
}

function _getTombstoneKey(kelas, nama) {
    return LS_TOMBSTONE_SISWA + kelas + '_' + _safeName(nama);
}
function _getResurrectKey(kelas, nama) {
    return LS_RESURRECT_SISWA + kelas + '_' + _safeName(nama);
}

function addSiswa(kelas, nama) {
    nama = String(nama || '').trim();
    if (!nama) throw new Error('Nama siswa tidak boleh kosong.');
    if (nama.length > 60) throw new Error('Nama siswa terlalu panjang (maks 60 karakter).');
    const d = loadSiswaData();
    if (!d[kelas]) d[kelas] = [];
    if (d[kelas].some(n => n.toLowerCase() === nama.toLowerCase())) {
        throw new Error(`Siswa "${nama}" sudah ada di ${getKelasName(kelas)}.`);
    }
    d[kelas].push(nama);
    saveSiswaData(d);
    _markSeeded();

    try {
        localStorage.setItem(_getResurrectKey(kelas, nama), JSON.stringify({
            ts: Date.now(),
            by: getDeviceMeta().deviceId
        }));
        localStorage.removeItem(_getTombstoneKey(kelas, nama));
    } catch (e) {}
    return nama;
}

function editSiswa(kelas, namaLama, namaBaru) {
    namaBaru = String(namaBaru || '').trim();
    if (!namaBaru) throw new Error('Nama baru tidak boleh kosong.');
    if (namaBaru.length > 60) throw new Error('Nama terlalu panjang (maks 60).');
    const d = loadSiswaData();
    const idx = (d[kelas] || []).findIndex(n => n === namaLama);
    if (idx < 0) throw new Error('Siswa tidak ditemukan.');
    if (namaBaru.toLowerCase() !== namaLama.toLowerCase() &&
        d[kelas].some(n => n.toLowerCase() === namaBaru.toLowerCase())) {
        throw new Error(`Nama "${namaBaru}" sudah dipakai siswa lain.`);
    }
    d[kelas][idx] = namaBaru;
    saveSiswaData(d);
    if (namaLama !== namaBaru) {
        migrateSiswaHafalan(kelas, namaLama, namaBaru);
        try {
            const oldRes = localStorage.getItem(_getResurrectKey(kelas, namaLama));
            if (oldRes) {
                localStorage.setItem(_getResurrectKey(kelas, namaBaru), oldRes);
                localStorage.removeItem(_getResurrectKey(kelas, namaLama));
            }
        } catch (e) {}
    }
    return namaBaru;
}

function deleteSiswa(kelas, nama) {
    const d = loadSiswaData();
    const idx = (d[kelas] || []).indexOf(nama);
    if (idx < 0) throw new Error('Siswa tidak ditemukan.');
    d[kelas].splice(idx, 1);
    saveSiswaData(d);

    _purgeSiswaData(kelas, nama);

    try {
        localStorage.setItem(_getTombstoneKey(kelas, nama), JSON.stringify({
            ts: Date.now(),
            by: getDeviceMeta().deviceId
        }));
        localStorage.removeItem(_getResurrectKey(kelas, nama));
    } catch (e) {}
}

function _purgeSiswaData(kelas, nama) {
    const prefix = `hafalan_${kelas}_`;
    const suffix = '_' + _safeName(nama);
    Object.keys(localStorage).forEach(k => {
        if (k.startsWith(LS_META_PREFIX)) {
            const realKey = k.substring(LS_META_PREFIX.length);
            if (realKey.startsWith(prefix) && realKey.indexOf(suffix + '_') > 0) {
                localStorage.removeItem(k);
                localStorage.removeItem(realKey);
            }
        } else if (k.startsWith(prefix) && k.indexOf(suffix + '_') > 0) {
            localStorage.removeItem(k);
            localStorage.removeItem(LS_META_PREFIX + k);
        }
    });
}

function migrateSiswaHafalan(kelas, namaLama, namaBaru) {
    const oldSuffix = '_' + _safeName(namaLama);
    const newSuffix = '_' + _safeName(namaBaru);
    const prefix = `hafalan_${kelas}_`;
    const moves = [];
    Object.keys(localStorage).forEach(k => {
        if (!k.startsWith(LS_META_PREFIX) && k.startsWith(prefix) && k.indexOf(oldSuffix + '_') > 0) {
            const newKey = k.replace(oldSuffix + '_', newSuffix + '_');
            moves.push([k, newKey]);
        }
    });
    moves.forEach(([oldK, newK]) => {
        const v = localStorage.getItem(oldK);
        if (v !== null) localStorage.setItem(newK, v);
        localStorage.removeItem(oldK);
        const oldM = LS_META_PREFIX + oldK;
        const newM = LS_META_PREFIX + newK;
        const mv = localStorage.getItem(oldM);
        if (mv !== null) localStorage.setItem(newM, mv);
        localStorage.removeItem(oldM);
    });
}

// =====================================================
// BARU: Reset daftar siswa ke DEFAULT_SISWA (dengan tombstone)
// =====================================================
/**
 * Ganti seluruh daftar siswa dengan DEFAULT_SISWA.
 * - Siswa lama yang tidak ada di default → dihapus + tombstone + hafalan dibersihkan.
 * - Siswa baru (dari default) yang belum ada → ditambahkan + resurrection marker.
 * - Siswa yang sudah ada di kedua sisi → dipertahankan apa adanya.
 * - Data hafalan siswa yang dipertahankan TIDAK diubah.
 * @returns {{deleted:number, added:number, kept:number}}
 */
function resetSiswaKeContoh() {
    const d = loadSiswaData();
    const now = Date.now();
    const by = getDeviceMeta().deviceId;
    let deleted = 0, added = 0, kept = 0;

    KELAS_LIST.forEach(kelas => {
        const cur = d[kelas] || [];
        const def = DEFAULT_SISWA[kelas] || [];
        const defLower = new Set(def.map(n => n.toLowerCase()));

        // 1) Hapus siswa lama yang tidak ada di default
        cur.forEach(nama => {
            if (!defLower.has(nama.toLowerCase())) {
                // hapus dari daftar + purge data + tombstone
                _purgeSiswaData(kelas, nama);
                try {
                    localStorage.setItem(_getTombstoneKey(kelas, nama), JSON.stringify({ ts: now, by }));
                    localStorage.removeItem(_getResurrectKey(kelas, nama));
                } catch (e) {}
                deleted++;
            }
        });

        // 2) Bangun daftar baru: pertahankan siswa lama yang cocok (case-insensitive) dengan nama
        //    dari daftar lama (agar nama yang sudah dipakai tidak berubah), lalu tambahkan yang belum ada.
        const resultList = [];
        const usedLower = new Set();

        // Pertama, siswa lama yang cocok dengan default (pertahankan ejaan lama)
        cur.forEach(nama => {
            const lower = nama.toLowerCase();
            if (defLower.has(lower) && !usedLower.has(lower)) {
                resultList.push(nama);
                usedLower.add(lower);
                kept++;
            }
        });

        // Kedua, siswa default yang belum ada → tambahkan
        def.forEach(nama => {
            const lower = nama.toLowerCase();
            if (!usedLower.has(lower)) {
                resultList.push(nama);
                usedLower.add(lower);
                added++;
                // resurrection marker
                try {
                    localStorage.setItem(_getResurrectKey(kelas, nama), JSON.stringify({ ts: now, by }));
                    localStorage.removeItem(_getTombstoneKey(kelas, nama));
                } catch (e) {}
            }
        });

        d[kelas] = resultList;
    });

    saveSiswaData(d);
    _markSeeded();
    return { deleted, added, kept };
}

/**
 * Kosongkan seluruh daftar siswa (bukan hanya hafalan).
 * Semua siswa lama → tombstone + purge data hafalan.
 */
function kosongkanSemuaSiswa() {
    const d = loadSiswaData();
    const now = Date.now();
    const by = getDeviceMeta().deviceId;
    let deleted = 0;

    KELAS_LIST.forEach(kelas => {
        (d[kelas] || []).forEach(nama => {
            _purgeSiswaData(kelas, nama);
            try {
                localStorage.setItem(_getTombstoneKey(kelas, nama), JSON.stringify({ ts: now, by }));
                localStorage.removeItem(_getResurrectKey(kelas, nama));
            } catch (e) {}
            deleted++;
        });
        d[kelas] = [];
    });
    saveSiswaData(d);
    _markSeeded();
    return { deleted };
}

// =====================================================
// MIGRASI KEY LAMA (Juz 1)
// =====================================================
(function migrateOldKeys() {
    const map = {
        'baqarah_28_23': 'baqarah_28_33',
        'baqarah_24_29': 'baqarah_34_39',
        'baqarah_30_35': 'baqarah_40_45'
    };
    try {
        Object.keys(localStorage).forEach(k => {
            const m = k.match(/^hafalan_(.+?)_(\d+)_(.+?)_(.+)$/);
            if (!m) return;
            const oldKey = m[4];
            if (map[oldKey]) {
                const newKey = k.replace(new RegExp(oldKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '$'), map[oldKey]);
                if (!localStorage.getItem(newKey)) localStorage.setItem(newKey, localStorage.getItem(k));
                localStorage.removeItem(k);
            }
        });
    } catch (e) {}
})();

// =====================================================
// HELPER DASAR
// =====================================================
function getKelasName(kelas) {
    const map = { awwal: "I'dad Awwal", tsani: "I'dad Tsani", tsalis: "I'dad Tsalis" };
    return map[kelas] || kelas;
}

function getBaseKey(kelas, juz, siswa, surahKey) {
    return `hafalan_${kelas}_${juz}_${_safeName(siswa)}_${surahKey}`;
}
function getStageKey(kelas, juz, siswa, surahKey, stage) {
    return `${getBaseKey(kelas, juz, siswa, surahKey)}__${stage}`;
}
function getTasmiJuzKey(kelas, juz, siswa) {
    return `hafalan_${kelas}_${juz}_${_safeName(siswa)}__tasmi_juz`;
}

// =====================================================
// META (timestamp + pelaku)
// =====================================================
function readMeta(key) {
    try {
        const raw = localStorage.getItem(LS_META_PREFIX + key);
        if (!raw) return null;
        const o = JSON.parse(raw);
        if (o && typeof o.ts === 'number') return o;
    } catch (e) {}
    return null;
}

function writeMeta(key, value, ts, by) {
    const meta = { v: value ? 'true' : 'false', ts: ts || Date.now(), by: by || getDeviceMeta().deviceId };
    localStorage.setItem(LS_META_PREFIX + key, JSON.stringify(meta));
    localStorage.setItem(key, value ? 'true' : 'false');
    return meta;
}

// =====================================================
// TOMBSTONE RECORD (untuk reset yang tersinkron)
// =====================================================
function _getRecordTombstoneKey(baseKey) {
    return LS_TOMBSTONE_RECORD + baseKey;
}
function _writeRecordTombstone(baseKey) {
    try {
        localStorage.setItem(_getRecordTombstoneKey(baseKey), JSON.stringify({
            ts: Date.now(),
            by: getDeviceMeta().deviceId
        }));
    } catch (e) {}
}
function _readRecordTombstone(baseKey) {
    try {
        const raw = localStorage.getItem(_getRecordTombstoneKey(baseKey));
        if (raw) return JSON.parse(raw);
    } catch (e) {}
    return null;
}

// =====================================================
// BACA / TULIS STATUS TAHAP
// =====================================================
function isStageChecked(kelas, juz, siswa, surahKey, stage) {
    let key = (stage === 'tasmi') ? getTasmiJuzKey(kelas, juz, siswa) : getStageKey(kelas, juz, siswa, surahKey, stage);
    const meta = readMeta(key);
    if (meta) return meta.v === 'true';
    const val = localStorage.getItem(key);
    if (val === 'true') return true;
    if (val === 'false') return false;
    if (stage === 'setor') return localStorage.getItem(getBaseKey(kelas, juz, siswa, surahKey)) === 'true';
    return false;
}

function setStageChecked(kelas, juz, siswa, surahKey, stage, value) {
    let key = (stage === 'tasmi') ? getTasmiJuzKey(kelas, juz, siswa) : getStageKey(kelas, juz, siswa, surahKey, stage);
    writeMeta(key, value);
    if (value) {
        try { localStorage.removeItem(_getRecordTombstoneKey(key)); } catch (e) {}
    }
}

function isTasmiJuzChecked(kelas, juz, siswa) { return isStageChecked(kelas, juz, siswa, null, 'tasmi'); }
function setTasmiJuzChecked(kelas, juz, siswa, value) { setStageChecked(kelas, juz, siswa, null, 'tasmi', value); }
function isChecked(kelas, juz, siswa, surahKey) { return isStageChecked(kelas, juz, siswa, surahKey, 'setor'); }
function setChecked(kelas, juz, siswa, surahKey, value) { setStageChecked(kelas, juz, siswa, surahKey, 'setor', value); }

// =====================================================
// PROGRESS
// =====================================================
function getProgressSiswa(kelas, juz, siswa, stage = 'setor') {
    const list = surahData[juz] || [];
    const total = list.length;
    let checked = 0;
    if (stage === 'tasmi') {
        const done = isTasmiJuzChecked(kelas, juz, siswa);
        return { total, checked: done ? total : 0, percent: done ? 100 : 0 };
    }
    list.forEach(s => { if (isStageChecked(kelas, juz, siswa, s.key, stage)) checked++; });
    return { total, checked, percent: total > 0 ? Math.round((checked / total) * 100) : 0 };
}

function getProgressSiswaAllStages(kelas, juz, siswa) {
    const list = surahData[juz] || [];
    const total = list.length;
    const result = { total, stages: {}, fullDone: 0 };
    const tasmiDone = isTasmiJuzChecked(kelas, juz, siswa);
    let fullDone = 0;
    if (tasmiDone) {
        list.forEach(s => {
            if (isStageChecked(kelas, juz, siswa, s.key, 'setor') &&
                isStageChecked(kelas, juz, siswa, s.key, 'takrir')) fullDone++;
        });
    }
    ['setor', 'takrir'].forEach(stId => {
        let c = 0;
        list.forEach(s => { if (isStageChecked(kelas, juz, siswa, s.key, stId)) c++; });
        result.stages[stId] = { total, checked: c, percent: total > 0 ? Math.round((c / total) * 100) : 0 };
    });
    result.stages.tasmi = { total, checked: tasmiDone ? total : 0, percent: tasmiDone ? 100 : 0 };
    result.fullDone = fullDone;
    result.fullPercent = total > 0 ? Math.round((fullDone / total) * 100) : 0;
    return result;
}

function getProgressKelas(kelas, juz, stage = 'setor') {
    const siswaList = getSiswaList(kelas);
    const surahList = surahData[juz] || [];
    if (siswaList.length === 0 || surahList.length === 0) {
        return { totalSiswa: siswaList.length, totalSurah: surahList.length, checked: 0, possible: 0, percent: 0 };
    }
    let totalChecked = 0;
    const totalPossible = siswaList.length * surahList.length;
    siswaList.forEach(siswa => {
        if (stage === 'tasmi') {
            if (isTasmiJuzChecked(kelas, juz, siswa)) totalChecked += surahList.length;
        } else {
            surahList.forEach(s => { if (isStageChecked(kelas, juz, siswa, s.key, stage)) totalChecked++; });
        }
    });
    return {
        totalSiswa: siswaList.length, totalSurah: surahList.length,
        checked: totalChecked, possible: totalPossible,
        percent: totalPossible > 0 ? Math.round((totalChecked / totalPossible) * 100) : 0
    };
}

function getPercentCategory(p) {
    if (p === 0) return 'zero';
    if (p < 30) return 'low';
    if (p < 70) return 'mid';
    if (p < 100) return 'good';
    return 'high';
}
function getPillClass(p) {
    const c = getPercentCategory(p);
    if (c === 'zero') return 'none';
    if (c === 'good') return 'high';
    return c;
}

// =====================================================
// RESET (dengan tombstone record agar tersinkron)
// =====================================================
function _collectKeysToReset(kelas, juz) {
    const result = [];
    Object.keys(localStorage).forEach(k => {
        if (!k.startsWith(LS_META_PREFIX + 'hafalan_')) return;
        const realKey = k.substring(LS_META_PREFIX.length);
        if (kelas && !realKey.startsWith(`hafalan_${kelas}_`)) return;
        if (juz !== undefined && juz !== null && !realKey.startsWith(`hafalan_${kelas}_${juz}_`)) return;
        result.push(realKey);
    });
    return result;
}

function _applyResetWithTombstone(keys) {
    const ts = Date.now();
    const by = getDeviceMeta().deviceId;
    let deleted = 0;
    keys.forEach(key => {
        try {
            localStorage.setItem(_getRecordTombstoneKey(key), JSON.stringify({ ts, by }));
        } catch (e) {}
        try {
            localStorage.removeItem(LS_META_PREFIX + key);
            localStorage.removeItem(key);
            deleted++;
        } catch (e) {}
    });
    return deleted;
}

function resetKelas(kelas) {
    const keys = _collectKeysToReset(kelas);
    return _applyResetWithTombstone(keys);
}
function resetKelasJuz(kelas, juz) {
    const keys = _collectKeysToReset(kelas, juz);
    return _applyResetWithTombstone(keys);
}
function resetSemua() {
    const keys = _collectKeysToReset();
    return _applyResetWithTombstone(keys);
}

function countStoredKeys(kelas, juz) {
    return _collectKeysToReset(kelas, juz).length;
}

// =====================================================
// EXPORT
// =====================================================
function exportData() {
    const device = getDeviceMeta();
    const records = {};
    const siswa = loadSiswaData();

    Object.keys(localStorage).forEach(k => {
        if (k.startsWith(LS_META_PREFIX)) {
            const realKey = k.substring(LS_META_PREFIX.length);
            if (!realKey.startsWith('hafalan_')) return;
            try {
                const o = JSON.parse(localStorage.getItem(k));
                if (o && typeof o.ts === 'number') {
                    records[realKey] = { v: o.v, ts: o.ts, by: o.by || device.deviceId };
                }
            } catch (e) {}
        } else if (k.startsWith('hafalan_') && !k.startsWith(LS_META_PREFIX)) {
            if (!records[k]) {
                const v = localStorage.getItem(k);
                if (v === 'true' || v === 'false') {
                    records[k] = { v: v, ts: 0, by: device.deviceId };
                }
            }
        }
    });

    const tombstones = {};
    Object.keys(localStorage).forEach(k => {
        if (k.startsWith(LS_TOMBSTONE_SISWA)) {
            try { tombstones[k] = JSON.parse(localStorage.getItem(k)); } catch (e) {}
        }
    });

    const resurrections = {};
    Object.keys(localStorage).forEach(k => {
        if (k.startsWith(LS_RESURRECT_SISWA)) {
            try { resurrections[k] = JSON.parse(localStorage.getItem(k)); } catch (e) {}
        }
    });

    const recordTombstones = {};
    Object.keys(localStorage).forEach(k => {
        if (k.startsWith(LS_TOMBSTONE_RECORD)) {
            try { recordTombstones[k] = JSON.parse(localStorage.getItem(k)); } catch (e) {}
        }
    });

    return {
        app: 'hafalan-santri',
        version: 5,
        deviceId: device.deviceId,
        deviceName: device.deviceName || 'Tanpa Nama',
        exportedAt: new Date().toISOString(),
        records: records,
        siswa: siswa,
        siswaTombstones: tombstones,
        siswaResurrections: resurrections,
        recordTombstones: recordTombstones
    };
}

// =====================================================
// IMPORT
// =====================================================
function importData(json) {
    const result = {
        added: 0, updated: 0, skipped: 0,
        siswaAdded: 0, siswaSkipped: 0, siswaDeleted: 0,
        hafalanPurged: 0,
        recordsDeletedByTombstone: 0,
        conflicts: [],
        total: 0, sourceDevice: '', sourceDeviceName: ''
    };

    if (!json || json.app !== 'hafalan-santri') {
        throw new Error('Format file tidak valid. Pastikan file diexport dari aplikasi Hafalan Santri.');
    }
    if (!json.records) json.records = {};

    result.sourceDevice = json.deviceId || 'unknown';
    result.sourceDeviceName = json.deviceName || 'Tanpa Nama';

    const incomingRecordTombstones = json.recordTombstones || {};

    // === 1) Merge records centang + handle record tombstones ===
    const keys = Object.keys(json.records);
    result.total = keys.length;

    Object.keys(incomingRecordTombstones).forEach(tKey => {
        const tom = incomingRecordTombstones[tKey];
        if (!tom || typeof tom.ts !== 'number') return;

        const localTom = _readRecordTombstone(tKey.substring(LS_TOMBSTONE_RECORD.length));
        const localTs = localTom ? localTom.ts : 0;

        if (tom.ts > localTs) {
            const baseKey = tKey.substring(LS_TOMBSTONE_RECORD.length);
            const hadMeta = !!localStorage.getItem(LS_META_PREFIX + baseKey);
            const hadVal = localStorage.getItem(baseKey) !== null;
            if (hadMeta || hadVal) {
                localStorage.removeItem(LS_META_PREFIX + baseKey);
                localStorage.removeItem(baseKey);
                result.recordsDeletedByTombstone++;
            }
            localStorage.setItem(tKey, JSON.stringify(tom));
        }
    });

    keys.forEach(key => {
        const incoming = json.records[key];
        if (!incoming || typeof incoming.ts !== 'number') { result.skipped++; return; }

        const localRecordTom = _readRecordTombstone(key);
        if (localRecordTom && localRecordTom.ts > incoming.ts) {
            result.skipped++;
            return;
        }

        const existing = readMeta(key);
        if (!existing) {
            writeMeta(key, incoming.v === 'true', incoming.ts, incoming.by || json.deviceId);
            result.added++;
        } else if (incoming.ts > existing.ts) {
            writeMeta(key, incoming.v === 'true', incoming.ts, incoming.by || json.deviceId);
            result.updated++;
        } else {
            result.skipped++;
        }
    });

    // === 2) Merge siswa ===
    if (json.siswa && typeof json.siswa === 'object') {
        const local = loadSiswaData();
        const incomingTombstones = json.siswaTombstones || {};
        const incomingResurrections = json.siswaResurrections || {};

        // 2a) Proses tombstone siswa dari file import
        KELAS_LIST.forEach(kelas => {
            const prefix = LS_TOMBSTONE_SISWA + kelas + '_';
            Object.keys(incomingTombstones).forEach(tKey => {
                if (!tKey.startsWith(prefix)) return;
                const tom = incomingTombstones[tKey];
                if (!tom || typeof tom.ts !== 'number') return;
                const safeName = tKey.substring(prefix.length);
                const targetName = (local[kelas] || []).find(n => _safeName(n) === safeName);
                if (!targetName) return;

                const localRes = localStorage.getItem(_getResurrectKey(kelas, targetName));
                let localResTs = 0;
                try { localResTs = localRes ? JSON.parse(localRes).ts : 0; } catch (e) {}

                if (localResTs > tom.ts) {
                    result.conflicts.push({
                        type: 'resurrect-wins',
                        kelas, nama: targetName,
                        reason: `Siswa "${targetName}" sudah ditambahkan kembali setelah dihapus. Tombstone diabaikan.`
                    });
                    result.siswaSkipped++;
                    return;
                }

                const localTom = localStorage.getItem(tKey);
                let localTs = 0;
                try { localTs = localTom ? JSON.parse(localTom).ts : 0; } catch (e) {}

                if (tom.ts > localTs) {
                    const ix = local[kelas].indexOf(targetName);
                    if (ix >= 0) { local[kelas].splice(ix, 1); result.siswaDeleted++; }
                    _purgeSiswaData(kelas, targetName);
                    result.hafalanPurged++;
                    localStorage.setItem(tKey, JSON.stringify(tom));
                }
            });
        });

        // 2b) Proses resurrection dari file import
        KELAS_LIST.forEach(kelas => {
            const prefix = LS_RESURRECT_SISWA + kelas + '_';
            Object.keys(incomingResurrections).forEach(rKey => {
                if (!rKey.startsWith(prefix)) return;
                const res = incomingResurrections[rKey];
                if (!res || typeof res.ts !== 'number') return;
                const safeName = rKey.substring(prefix.length);

                const localTom = localStorage.getItem(LS_TOMBSTONE_SISWA + kelas + '_' + safeName);
                let localTomTs = 0;
                try { localTomTs = localTom ? JSON.parse(localTom).ts : 0; } catch (e) {}

                if (localTomTs > res.ts) {
                    result.conflicts.push({
                        type: 'tombstone-wins',
                        kelas, nama: safeName.replace(/_/g, ' '),
                        reason: `Resurrection dari file diabaikan karena tombstone lokal lebih baru.`
                    });
                    return;
                }

                const localRes = localStorage.getItem(rKey);
                let localTs = 0;
                try { localTs = localRes ? JSON.parse(localRes).ts : 0; } catch (e) {}
                if (res.ts > localTs) {
                    localStorage.setItem(rKey, JSON.stringify(res));
                }
            });
        });

        // 2c) Tambahkan siswa baru dari file
        KELAS_LIST.forEach(kelas => {
            const inList = Array.isArray(json.siswa[kelas]) ? json.siswa[kelas] : [];
            if (!local[kelas]) local[kelas] = [];
            inList.forEach(nama => {
                if (typeof nama !== 'string') return;
                const clean = nama.trim();
                if (!clean) return;

                const tomKey = _getTombstoneKey(kelas, clean);
                const localTom = localStorage.getItem(tomKey);
                if (localTom) {
                    try {
                        const t = JSON.parse(localTom);
                        const inTom = incomingTombstones[tomKey];
                        if (t && t.ts > (inTom ? inTom.ts : 0)) {
                            result.siswaSkipped++;
                            return;
                        }
                    } catch (e) {}
                }

                if (!local[kelas].some(n => n.toLowerCase() === clean.toLowerCase())) {
                    local[kelas].push(clean);
                    result.siswaAdded++;
                } else {
                    result.siswaSkipped++;
                }
            });
        });
        saveSiswaData(local);
        _markSeeded();
    }

    return result;
}

// =====================================================
// SUMMARY
// =====================================================
function getDataSummary() {
    let total = 0, setor = 0, takrir = 0, tasmi = 0;
    Object.keys(localStorage).forEach(k => {
        if (!k.startsWith(LS_META_PREFIX + 'hafalan_')) return;
        const realKey = k.substring(LS_META_PREFIX.length);
        if (realKey.endsWith('__tasmi_juz')) tasmi++;
        else if (realKey.endsWith('__takrir')) takrir++;
        else if (realKey.endsWith('__setor')) setor++;
        total++;
    });
    const siswa = loadSiswaData();
    const totalSiswa = KELAS_LIST.reduce((s, k) => s + (siswa[k] || []).length, 0);
    return { total, setor, takrir, tasmi, totalSiswa };
}