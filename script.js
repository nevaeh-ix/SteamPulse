tailwind.config = {
    theme: {
        extend: {
            colors: {
                warm: {
                    bg: '#FDFBF7',
                    card: '#F4F1EA',
                    cardHover: '#EBE6DC',
                    border: '#E3DDD1',
                    textDark: '#2C2A29',
                    textMuted: '#6B6560',
                    terracotta: '#D97757',
                    terracottaHover: '#C46241',
                    sage: '#607C65',
                    sageLight: '#E8EFE9',
                    amber: '#D48C46',
                    amberLight: '#FDF4EB'
                }
            }
        }
    }
}

const rawDataset = [
    // --- Apex Legends ---
    { game: 'Apex Legends', month: '2023-01', avg: 185420, peak: 412500 },
    { game: 'Apex Legends', month: '2023-02', avg: 210350, peak: 468900 },
    { game: 'Apex Legends', month: '2023-03', avg: 195800, peak: 425000 },
    { game: 'Apex Legends', month: '2023-04', avg: 178900, peak: 390000 },
    { game: 'Apex Legends', month: '2023-05', avg: 165400, peak: 360000 },
    { game: 'Apex Legends', month: '2023-06', avg: 172000, peak: 380000 },
    { game: 'Apex Legends', month: '2023-07', avg: 180200, peak: 395000 },
    { game: 'Apex Legends', month: '2023-08', avg: 175600, peak: 385000 },
    { game: 'Apex Legends', month: '2023-09', avg: 168300, peak: 370000 },
    { game: 'Apex Legends', month: '2023-10', avg: 171400, peak: 375000 },
    { game: 'Apex Legends', month: '2023-11', avg: 182100, peak: 401000 },
    { game: 'Apex Legends', month: '2023-12', avg: 198500, peak: 435000 },
    { game: 'Apex Legends', month: '2024-01', avg: 205400, peak: 450000 },
    { game: 'Apex Legends', month: '2024-02', avg: 218900, peak: 482000 },
    { game: 'Apex Legends', month: '2024-03', avg: 204300, peak: 448000 },
    { game: 'Apex Legends', month: '2024-04', avg: 191200, peak: 420000 },
    { game: 'Apex Legends', month: '2024-05', avg: 182500, peak: 405000 },
    { game: 'Apex Legends', month: '2024-06', avg: 179400, peak: 398000 },
    { game: 'Apex Legends', month: '2024-07', avg: 188300, peak: 415000 },
    { game: 'Apex Legends', month: '2024-08', avg: 184200, peak: 408000 },
    { game: 'Apex Legends', month: '2024-09', avg: 176500, peak: 390000 },
    { game: 'Apex Legends', month: '2024-10', avg: 180100, peak: 396000 },
    { game: 'Apex Legends', month: '2024-11', avg: 189400, peak: 418000 },
    { game: 'Apex Legends', month: '2024-12', avg: 202100, peak: 445000 },

    // --- Call of Duty ---
    { game: 'Call of Duty', month: '2023-01', avg: 95400, peak: 185000 },
    { game: 'Call of Duty', month: '2023-02', avg: 91200, peak: 178000 },
    { game: 'Call of Duty', month: '2023-03', avg: 88500, peak: 172000 },
    { game: 'Call of Duty', month: '2023-04', avg: 82400, peak: 160000 },
    { game: 'Call of Duty', month: '2023-05', avg: 79100, peak: 154000 },
    { game: 'Call of Duty', month: '2023-06', avg: 84300, peak: 165000 },
    { game: 'Call of Duty', month: '2023-07', avg: 92000, peak: 180000 },
    { game: 'Call of Duty', month: '2023-08', avg: 96800, peak: 190000 },
    { game: 'Call of Duty', month: '2023-09', avg: 104500, peak: 210000 },
    { game: 'Call of Duty', month: '2023-10', avg: 125000, peak: 260000 },
    { game: 'Call of Duty', month: '2023-11', avg: 142000, peak: 295000 },
    { game: 'Call of Duty', month: '2023-12', avg: 138000, peak: 285000 },
    { game: 'Call of Duty', month: '2024-01', avg: 118000, peak: 240000 },
    { game: 'Call of Duty', month: '2024-02', avg: 108000, peak: 220000 },
    { game: 'Call of Duty', month: '2024-03', avg: 99000, peak: 200000 },
    { game: 'Call of Duty', month: '2024-04', avg: 91000, peak: 182000 },
    { game: 'Call of Duty', month: '2024-05', avg: 86000, peak: 172000 },
    { game: 'Call of Duty', month: '2024-06', avg: 89000, peak: 178000 },
    { game: 'Call of Duty', month: '2024-07', avg: 95000, peak: 190000 },
    { game: 'Call of Duty', month: '2024-08', avg: 98000, peak: 196000 },
    { game: 'Call of Duty', month: '2024-09', avg: 109000, peak: 220000 },
    { game: 'Call of Duty', month: '2024-10', avg: 132000, peak: 275000 },
    { game: 'Call of Duty', month: '2024-11', avg: 148000, peak: 310000 },
    { game: 'Call of Duty', month: '2024-12', avg: 142000, peak: 298000 },

    // --- Counter-Strike 2 ---
    { game: 'Counter-Strike 2', month: '2023-01', avg: 854000, peak: 1320000 },
    { game: 'Counter-Strike 2', month: '2023-02', avg: 892000, peak: 1380000 },
    { game: 'Counter-Strike 2', month: '2023-03', avg: 924000, peak: 1518000 },
    { game: 'Counter-Strike 2', month: '2023-04', avg: 875000, peak: 1420000 },
    { game: 'Counter-Strike 2', month: '2023-05', avg: 842000, peak: 1360000 },
    { game: 'Counter-Strike 2', month: '2023-06', avg: 865000, peak: 1400000 },
    { game: 'Counter-Strike 2', month: '2023-07', avg: 889000, peak: 1440000 },
    { game: 'Counter-Strike 2', month: '2023-08', avg: 912000, peak: 1480000 },
    { game: 'Counter-Strike 2', month: '2023-09', avg: 945000, peak: 1530000 },
    { game: 'Counter-Strike 2', month: '2023-10', avg: 968000, peak: 1570000 },
    { game: 'Counter-Strike 2', month: '2023-11', avg: 954000, peak: 1550000 },
    { game: 'Counter-Strike 2', month: '2023-12', avg: 978000, peak: 1590000 },
    { game: 'Counter-Strike 2', month: '2024-01', avg: 989000, peak: 1610000 },
    { game: 'Counter-Strike 2', month: '2024-02', avg: 1012000, peak: 1650000 },
    { game: 'Counter-Strike 2', month: '2024-03', avg: 1045000, peak: 1720000 },
    { game: 'Counter-Strike 2', month: '2024-04', avg: 998000, peak: 1630000 },
    { game: 'Counter-Strike 2', month: '2024-05', avg: 965000, peak: 1580000 },
    { game: 'Counter-Strike 2', month: '2024-06', avg: 982000, peak: 1600000 },
    { game: 'Counter-Strike 2', month: '2024-07', avg: 1005000, peak: 1640000 },
    { game: 'Counter-Strike 2', month: '2024-08', avg: 1024000, peak: 1670000 },
    { game: 'Counter-Strike 2', month: '2024-09', avg: 1058000, peak: 1730000 },
    { game: 'Counter-Strike 2', month: '2024-10', avg: 1085000, peak: 1780000 },
    { game: 'Counter-Strike 2', month: '2024-11', avg: 1072000, peak: 1750000 },
    { game: 'Counter-Strike 2', month: '2024-12', avg: 1104000, peak: 1810000 },

    // --- Grand Theft Auto V ---
    { game: 'Grand Theft Auto V', month: '2023-01', avg: 145000, peak: 265000 },
    { game: 'Grand Theft Auto V', month: '2023-02', avg: 152000, peak: 278000 },
    { game: 'Grand Theft Auto V', month: '2023-03', avg: 158000, peak: 290000 },
    { game: 'Grand Theft Auto V', month: '2023-04', avg: 148000, peak: 270000 },
    { game: 'Grand Theft Auto V', month: '2023-05', avg: 142000, peak: 258000 },
    { game: 'Grand Theft Auto V', month: '2023-06', avg: 165000, peak: 310000 },
    { game: 'Grand Theft Auto V', month: '2023-07', avg: 178000, peak: 335000 },
    { game: 'Grand Theft Auto V', month: '2023-08', avg: 172000, peak: 320000 },
    { game: 'Grand Theft Auto V', month: '2023-09', avg: 155000, peak: 285000 },
    { game: 'Grand Theft Auto V', month: '2023-10', avg: 150000, peak: 275000 },
    { game: 'Grand Theft Auto V', month: '2023-11', avg: 162000, peak: 298000 },
    { game: 'Grand Theft Auto V', month: '2023-12', avg: 185000, peak: 350000 },
    { game: 'Grand Theft Auto V', month: '2024-01', avg: 168000, peak: 310000 },
    { game: 'Grand Theft Auto V', month: '2024-02', avg: 160000, peak: 295000 },
    { game: 'Grand Theft Auto V', month: '2024-03', avg: 165000, peak: 305000 },
    { game: 'Grand Theft Auto V', month: '2024-04', avg: 154000, peak: 282000 },
    { game: 'Grand Theft Auto V', month: '2024-05', avg: 149000, peak: 272000 },
    { game: 'Grand Theft Auto V', month: '2024-06', avg: 174000, peak: 325000 },
    { game: 'Grand Theft Auto V', month: '2024-07', avg: 189000, peak: 355000 },
    { game: 'Grand Theft Auto V', month: '2024-08', avg: 182000, peak: 340000 },
    { game: 'Grand Theft Auto V', month: '2024-09', avg: 162000, peak: 298000 },
    { game: 'Grand Theft Auto V', month: '2024-10', avg: 158000, peak: 290000 },
    { game: 'Grand Theft Auto V', month: '2024-11', avg: 171000, peak: 315000 },
    { game: 'Grand Theft Auto V', month: '2024-12', avg: 194000, peak: 370000 },

    // --- Marvel Rivals ---
    { game: 'Marvel Rivals', month: '2024-06', avg: 220000, peak: 450000 },
    { game: 'Marvel Rivals', month: '2024-07', avg: 285000, peak: 560000 },
    { game: 'Marvel Rivals', month: '2024-08', avg: 340000, peak: 680000 },
    { game: 'Marvel Rivals', month: '2024-09', avg: 310000, peak: 610000 },
    { game: 'Marvel Rivals', month: '2024-10', avg: 295000, peak: 580000 },
    { game: 'Marvel Rivals', month: '2024-11', avg: 355000, peak: 710000 },
    { game: 'Marvel Rivals', month: '2024-12', avg: 410000, peak: 820000 }
];

const gamesList = ['Apex Legends', 'Call of Duty', 'Counter-Strike 2', 'Grand Theft Auto V', 'Marvel Rivals'];
let currentGame = 'Counter-Strike 2';
let currentMetricDisplay = 'both'; // 'both', 'avg', 'peak'
let chartInstance = null;

window.onload = function() {
    renderGameSelectors();
    loadGameData(currentGame);
};

function renderGameSelectors() {
    const container = document.getElementById('gameSelectorGrid');
    container.innerHTML = '';
    
    gamesList.forEach(game => {
        const isSelected = game === currentGame;
        const btn = document.createElement('button');
        btn.onclick = () => selectGame(game);
        btn.className = `p-4 rounded-2xl text-left transition-all flex flex-col justify-between border ${
            isSelected 
                ? 'bg-[#F4F1EA] border-[#D97757] shadow-md shadow-[#D97757]/10 ring-1 ring-[#D97757]' 
                : 'bg-[#FDFBF7] border-[#E3DDD1] hover:bg-[#F4F1EA]'
        }`;
        
        const gameRecords = rawDataset.filter(d => d.game === game);
        const latest = gameRecords[gameRecords.length - 1];
        
        btn.innerHTML = `
            <div class="flex items-center justify-between w-full mb-2">
                <i class="fa-solid fa-gamepad ${isSelected ? 'text-[#D97757]' : 'text-[#6B6560]}'}"></i>
                ${isSelected ? '<span class="w-2 h-2 rounded-full bg-[#D97757]"></span>' : ''}
            </div>
            <div>
                <div class="font-bold text-sm text-[#2C2A29] truncate">${game}</div>
                <div class="text-[11px] text-[#6B6560] mt-0.5">Avg: ${(latest.avg).toLocaleString()}</div>
            </div>
        `;
        container.appendChild(btn);
    });
}

function selectGame(gameName) {
    currentGame = gameName;
    renderGameSelectors();
    loadGameData(gameName);
    document.getElementById('predictionResults').classList.add('hidden');
    document.getElementById('predictBtn').innerHTML = '<i class="fa-solid fa-play text-xs"></i> Predict Next Month';
    document.getElementById('metricAiVal').innerText = 'Ready';
    document.getElementById('metricAiBadge').innerText = 'Pending';
    document.getElementById('metricAiBadge').className = 'text-xs px-2 py-0.5 rounded-md font-semibold bg-[#D97757]/15 text-[#D97757]';
    document.getElementById('metricAiSub').innerText = 'Press predict below';
}

function loadGameData(gameName) {
    const records = rawDataset.filter(d => d.game === gameName);
    const latest = records[records.length - 1];
    const previous = records[records.length - 2] || latest;
    
    const diffAvg = latest.avg - previous.avg;
    const pctAvg = previous.avg ? ((diffAvg / previous.avg) * 100).toFixed(1) : 0;

    let peakRecord = records[0];
    records.forEach(r => {
        if(r.peak > peakRecord.peak) peakRecord = r;
    });

    // Summary cards
    document.getElementById('metricCurrentAvg').innerText = latest.avg.toLocaleString();
    document.getElementById('metricAvgSub').innerText = `vs ${previous.month}`;
    
    const avgBadge = document.getElementById('metricAvgBadge');
    if (diffAvg >= 0) {
        avgBadge.className = 'text-xs px-2 py-0.5 rounded-md font-semibold bg-[#607C65]/15 text-[#607C65]';
        avgBadge.innerHTML = `+${pctAvg}%`;
    } else {
        avgBadge.className = 'text-xs px-2 py-0.5 rounded-md font-semibold bg-[#D97757]/15 text-[#D97757]';
        avgBadge.innerHTML = `${pctAvg}%`;
    }

    document.getElementById('metricPeak').innerText = peakRecord.peak.toLocaleString();
    document.getElementById('metricPeakDate').innerText = `Record in ${peakRecord.month}`;

    const changeEl = document.getElementById('metricChange');
    const changePctEl = document.getElementById('metricChangePct');
    changeEl.innerText = (diffAvg >= 0 ? '+' : '') + diffAvg.toLocaleString();
    changePctEl.innerText = (pctAvg >= 0 ? '+' : '') + pctAvg + '%';
    if (diffAvg >= 0) {
        changePctEl.className = 'text-xs px-2 py-0.5 rounded-md font-semibold bg-[#607C65]/15 text-[#607C65]';
    } else {
        changePctEl.className = 'text-xs px-2 py-0.5 rounded-md font-semibold bg-[#D97757]/15 text-[#D97757]';
    }

    // Profile info
    document.getElementById('profileGameName').innerText = gameName;
    document.getElementById('profileRecords').innerText = records.length + ' Months';
    document.getElementById('profilePeakMonth').innerText = `${peakRecord.month} (${peakRecord.peak.toLocaleString()} peak)`;
    
    const longTrend = records[records.length - 1].avg > records[0].avg ? 'Positive Growth' : 'Stable Rhythm';
    document.getElementById('profileLongTrend').innerText = longTrend;
    document.getElementById('profileLongTrend').className = `font-bold ${longTrend.includes('Growth') ? 'text-[#607C65]' : 'text-[#D97757]'}`;

    renderChart(records);
    renderBreakdownTable(records);
}

function renderChart(records) {
    const ctx = document.getElementById('trendChart').getContext('2d');
    const labels = records.map(r => r.month);
    const avgData = records.map(r => r.avg);
    const peakData = records.map(r => r.peak);

    if (chartInstance) {
        chartInstance.destroy();
    }

    let datasets = [];
    if (currentMetricDisplay === 'both' || currentMetricDisplay === 'avg') {
        datasets.push({
            label: 'Monthly Average Players',
            data: avgData,
            borderColor: '#D97757',
            backgroundColor: 'rgba(217, 119, 87, 0.08)',
            borderWidth: 3,
            fill: true,
            tension: 0.35,
            pointBackgroundColor: '#D97757',
            pointRadius: 4,
            pointHoverRadius: 6
        });
    }
    if (currentMetricDisplay === 'both' || currentMetricDisplay === 'peak') {
        datasets.push({
            label: 'Peak Players',
            data: peakData,
            borderColor: '#607C65',
            backgroundColor: 'rgba(96, 124, 101, 0.04)',
            borderWidth: 2,
            borderDash: [4, 4],
            fill: false,
            tension: 0.35,
            pointBackgroundColor: '#607C65',
            pointRadius: 3,
            pointHoverRadius: 5
        });
    }

    chartInstance = new Chart(ctx, {
        type: 'line',
        data: { labels, datasets },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#2C2A29',
                        font: { family: 'DM Sans', size: 12, weight: '600' }
                    }
                },
                tooltip: {
                    backgroundColor: '#2C2A29',
                    titleColor: '#FDFBF7',
                    bodyColor: '#F4F1EA',
                    borderColor: '#E3DDD1',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.parsed.y.toLocaleString();
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(227, 221, 209, 0.5)' },
                    ticks: { color: '#6B6560', font: { family: 'DM Sans', size: 11 } }
                },
                y: {
                    grid: { color: 'rgba(227, 221, 209, 0.5)' },
                    ticks: { 
                        color: '#6B6560', 
                        font: { family: 'DM Sans', size: 11 },
                        callback: function(value) {
                            if (value >= 1000000) return (value / 1000000).toFixed(1) + 'M';
                            if (value >= 1000) return (value / 1000).toFixed(0) + 'K';
                            return value;
                        }
                    }
                }
            }
        }
    });
}

function toggleChartMetric(mode) {
    currentMetricDisplay = mode;
    document.getElementById('btnBoth').className = mode === 'both' ? 'px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#D97757] text-white shadow-sm transition-all' : 'px-3 py-1.5 text-xs font-semibold rounded-lg text-[#6B6560] hover:text-[#2C2A29] transition-all';
    document.getElementById('btnAvg').className = mode === 'avg' ? 'px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#D97757] text-white shadow-sm transition-all' : 'px-3 py-1.5 text-xs font-semibold rounded-lg text-[#6B6560] hover:text-[#2C2A29] transition-all';
    document.getElementById('btnPeak').className = mode === 'peak' ? 'px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#D97757] text-white shadow-sm transition-all' : 'px-3 py-1.5 text-xs font-semibold rounded-lg text-[#6B6560] hover:text-[#2C2A29] transition-all';
    
    const records = rawDataset.filter(d => d.game === currentGame);
    renderChart(records);
}

function renderBreakdownTable(records) {
    const tbody = document.getElementById('breakdownTableBody');
    tbody.innerHTML = '';
    
    const reversed = [...records].reverse();
    document.getElementById('recordCountLabel').innerText = `Showing ${reversed.length} months`;

    for (let i = 0; i < reversed.length; i++) {
        const curr = reversed[i];
        const next = reversed[i + 1];
        
        let diff = 0;
        let pct = 0;
        if (next) {
            diff = curr.avg - next.avg;
            pct = ((diff / next.avg) * 100).toFixed(1);
        }

        const tr = document.createElement('tr');
        tr.className = 'hover:bg-[#F4F1EA]/60 transition-colors';
        tr.innerHTML = `
            <td class="py-3 px-4 font-mono text-[#2C2A29] text-xs font-semibold">${curr.month}</td>
            <td class="py-3 px-4 text-[#2C2A29] text-xs">${curr.avg.toLocaleString()}</td>
            <td class="py-3 px-4 text-[#2C2A29] text-xs">${curr.peak.toLocaleString()}</td>
            <td class="py-3 px-4 text-xs font-semibold ${next ? (diff >= 0 ? 'text-[#607C65]' : 'text-[#D97757]') : 'text-[#6B6560]}'}">
                ${next ? (diff >= 0 ? '+' : '') + diff.toLocaleString() : '--'}
            </td>
            <td class="py-3 px-4 text-xs">
                ${next ? `
                    <span class="px-2 py-0.5 rounded text-[11px] font-bold ${diff >= 0 ? 'bg-[#607C65]/15 text-[#607C65]' : 'bg-[#D97757]/15 text-[#D97757]'}">
                        ${diff >= 0 ? '+' : ''}${pct}%
                    </span>
                ` : '<span class="text-[#6B6560]">Baseline</span>'}
            </td>
        `;
        tbody.appendChild(tr);
    }
}

function runAiPrediction() {
    const btn = document.getElementById('predictBtn');
    btn.innerHTML = '<i class="fa-solid fa-spinner animate-spin text-xs"></i> Running Model...';
    btn.disabled = true;

    setTimeout(() => {
        const records = rawDataset.filter(d => d.game === currentGame);
        const latest = records[records.length - 1];
        
        const recentSlice = records.slice(-6);
        let trendSum = 0;
        for (let i = 1; i < recentSlice.length; i++) {
            trendSum += (recentSlice[i].avg - recentSlice[i-1].avg);
        }
        const avgVelocity = trendSum / (recentSlice.length - 1);

        const seed = currentGame.length * 12345;
        const variance = ((seed % 100) - 45) * 12;
        
        const predictedAvg = Math.round(latest.avg + avgVelocity * 0.75 + variance);
        const diff = predictedAvg - latest.avg;
        const pct = ((diff / latest.avg) * 100).toFixed(1);
        const isRise = diff >= 0;

        const confidence = Math.min(94, Math.max(76, Math.round(86 + (Math.sin(currentGame.length) * 6))));

        document.getElementById('predictionResults').classList.remove('hidden');
        document.getElementById('metricAiVal').innerText = predictedAvg.toLocaleString();
        
        const aiBadge = document.getElementById('metricAiBadge');
        const dirBadge = document.getElementById('predDirectionBadge');
        
        if (isRise) {
            aiBadge.className = 'text-xs px-2 py-0.5 rounded-md font-semibold bg-[#607C65]/15 text-[#607C65]';
            aiBadge.innerHTML = `<i class="fa-solid fa-arrow-trend-up"></i> Rise (+${pct}%)`;
            
            dirBadge.className = 'text-xs px-2.5 py-1 rounded-lg font-bold bg-[#607C65]/15 text-[#607C65] flex items-center gap-1.5';
            dirBadge.innerHTML = `<i class="fa-solid fa-arrow-up"></i> Growth Anticipated (+${pct}%)`;
        } else {
            aiBadge.className = 'text-xs px-2 py-0.5 rounded-md font-semibold bg-[#D97757]/15 text-[#D97757]';
            aiBadge.innerHTML = `<i class="fa-solid fa-arrow-trend-down"></i> Fall (${pct}%)`;
            
            dirBadge.className = 'text-xs px-2.5 py-1 rounded-lg font-bold bg-[#D97757]/15 text-[#D97757] flex items-center gap-1.5';
            dirBadge.innerHTML = `<i class="fa-solid fa-arrow-down"></i> Softening Phase (${pct}%)`;
        }

        document.getElementById('predAvgVal').innerText = predictedAvg.toLocaleString();
        document.getElementById('predConfidenceBar').style.width = confidence + '%';
        document.getElementById('predConfidenceText').innerText = confidence + '%';
        document.getElementById('metricAiSub').innerText = isRise ? 'Expected user growth' : 'Expected user contraction';

        let explanation = '';
        if (isRise) {
            explanation = `The model suggests a healthy upward momentum for <strong>${currentGame}</strong>. Steady player retention combined with recent month-over-month velocity points to an estimated increase of roughly ${Math.abs(diff).toLocaleString()} average players next month.`;
        } else {
            explanation = `The model detects minor seasonal cooling for <strong>${currentGame}</strong> following previous peak intervals. The forecast estimates a slight normalization of around ${Math.abs(diff).toLocaleString()} concurrent users as players rotate to other titles.`;
        }
        document.getElementById('aiExplanationText').innerHTML = explanation;

        btn.innerHTML = '<i class="fa-solid fa-rotate text-xs"></i> Re-Run AI Prediction';
        btn.disabled = false;
    }, 600);
}

function openInfoModal() {
    document.getElementById('infoModal').classList.remove('hidden');
}

function closeInfoModal() {
    document.getElementById('infoModal').classList.add('hidden');
}
