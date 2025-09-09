import {
  SizeGuideContainer,
  SizeGuideTitle,
  Section,
  SectionTitle,
  SizeTable,
  TableHeader,
  TableRow,
  TableCell,
  InfoText,
  MeasurementTips,
  TipItem
} from './size-guide.styles';

const SizeGuide = () => {
  return (
    <SizeGuideContainer>
      <SizeGuideTitle>Size Guide</SizeGuideTitle>
      
      <InfoText>
        Find your perfect fit with our comprehensive size guide. All measurements are in inches.
      </InfoText>

      <Section>
        <SectionTitle>Men's Clothing</SectionTitle>
        <SizeTable>
          <TableHeader>
            <TableCell>Size</TableCell>
            <TableCell>Chest</TableCell>
            <TableCell>Waist</TableCell>
            <TableCell>Hip</TableCell>
            <TableCell>Sleeve</TableCell>
          </TableHeader>
          <TableRow>
            <TableCell>XS</TableCell>
            <TableCell>32-34</TableCell>
            <TableCell>28-30</TableCell>
            <TableCell>32-34</TableCell>
            <TableCell>32</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>S</TableCell>
            <TableCell>34-36</TableCell>
            <TableCell>30-32</TableCell>
            <TableCell>34-36</TableCell>
            <TableCell>33</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>M</TableCell>
            <TableCell>36-38</TableCell>
            <TableCell>32-34</TableCell>
            <TableCell>36-38</TableCell>
            <TableCell>34</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>L</TableCell>
            <TableCell>38-40</TableCell>
            <TableCell>34-36</TableCell>
            <TableCell>38-40</TableCell>
            <TableCell>35</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>XL</TableCell>
            <TableCell>40-42</TableCell>
            <TableCell>36-38</TableCell>
            <TableCell>40-42</TableCell>
            <TableCell>36</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>XXL</TableCell>
            <TableCell>42-44</TableCell>
            <TableCell>38-40</TableCell>
            <TableCell>42-44</TableCell>
            <TableCell>37</TableCell>
          </TableRow>
        </SizeTable>
      </Section>

      <Section>
        <SectionTitle>Women's Clothing</SectionTitle>
        <SizeTable>
          <TableHeader>
            <TableCell>Size</TableCell>
            <TableCell>Bust</TableCell>
            <TableCell>Waist</TableCell>
            <TableCell>Hip</TableCell>
            <TableCell>Sleeve</TableCell>
          </TableHeader>
          <TableRow>
            <TableCell>XS</TableCell>
            <TableCell>30-32</TableCell>
            <TableCell>24-26</TableCell>
            <TableCell>32-34</TableCell>
            <TableCell>30</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>S</TableCell>
            <TableCell>32-34</TableCell>
            <TableCell>26-28</TableCell>
            <TableCell>34-36</TableCell>
            <TableCell>31</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>M</TableCell>
            <TableCell>34-36</TableCell>
            <TableCell>28-30</TableCell>
            <TableCell>36-38</TableCell>
            <TableCell>32</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>L</TableCell>
            <TableCell>36-38</TableCell>
            <TableCell>30-32</TableCell>
            <TableCell>38-40</TableCell>
            <TableCell>33</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>XL</TableCell>
            <TableCell>38-40</TableCell>
            <TableCell>32-34</TableCell>
            <TableCell>40-42</TableCell>
            <TableCell>34</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>XXL</TableCell>
            <TableCell>40-42</TableCell>
            <TableCell>34-36</TableCell>
            <TableCell>42-44</TableCell>
            <TableCell>35</TableCell>
          </TableRow>
        </SizeTable>
      </Section>

      <Section>
        <SectionTitle>Footwear</SectionTitle>
        <SizeTable>
          <TableHeader>
            <TableCell>US Men</TableCell>
            <TableCell>US Women</TableCell>
            <TableCell>UK</TableCell>
            <TableCell>EU</TableCell>
            <TableCell>Length (inches)</TableCell>
          </TableHeader>
          <TableRow>
            <TableCell>7</TableCell>
            <TableCell>8.5</TableCell>
            <TableCell>6</TableCell>
            <TableCell>40</TableCell>
            <TableCell>9.6</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>8</TableCell>
            <TableCell>9.5</TableCell>
            <TableCell>7</TableCell>
            <TableCell>41</TableCell>
            <TableCell>9.9</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>9</TableCell>
            <TableCell>10.5</TableCell>
            <TableCell>8</TableCell>
            <TableCell>42</TableCell>
            <TableCell>10.3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>10</TableCell>
            <TableCell>11.5</TableCell>
            <TableCell>9</TableCell>
            <TableCell>43</TableCell>
            <TableCell>10.6</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>11</TableCell>
            <TableCell>12.5</TableCell>
            <TableCell>10</TableCell>
            <TableCell>44</TableCell>
            <TableCell>11.0</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>12</TableCell>
            <TableCell>13.5</TableCell>
            <TableCell>11</TableCell>
            <TableCell>45</TableCell>
            <TableCell>11.3</TableCell>
          </TableRow>
        </SizeTable>
      </Section>

      <Section>
        <SectionTitle>How to Measure</SectionTitle>
        <MeasurementTips>
          <TipItem>
            <strong>Chest/Bust:</strong> Measure around the fullest part of your chest/bust, keeping the tape measure level.
          </TipItem>
          <TipItem>
            <strong>Waist:</strong> Measure around your natural waistline, which is the narrowest part of your torso.
          </TipItem>
          <TipItem>
            <strong>Hip:</strong> Measure around the fullest part of your hips, about 8 inches below your waist.
          </TipItem>
          <TipItem>
            <strong>Sleeve:</strong> Measure from the center back of your neck, over your shoulder, and down to your wrist.
          </TipItem>
          <TipItem>
            <strong>Foot Length:</strong> Stand on a piece of paper and mark your heel and longest toe. Measure the distance between marks.
          </TipItem>
        </MeasurementTips>
      </Section>

      <InfoText>
        <strong>Sizing Tips:</strong> If you're between sizes, we generally recommend sizing up for a more comfortable fit. 
        For any specific questions about sizing, please don't hesitate to contact our customer service team.
      </InfoText>
    </SizeGuideContainer>
  );
};

export default SizeGuide;
